import { createRequire } from 'module';
import ts from 'typescript';
import path from 'path';
import multiInput from 'rollup-plugin-multi-input';
import postcss, { addCssImports, generateClassNameHash } from '@alfalab/rollup-plugin-postcss';
import wildcardExternal from '@oat-sa/rollup-plugin-wildcard-external';
import typescript from 'rollup-plugin-ts';
import copy from 'rollup-plugin-copy';
import json from '@rollup/plugin-json';

import {
    coreComponentsRootPackageResolver,
    coreComponentsResolver,
} from './tools/rollup/core-components-resolver.mjs';
import ignoreCss from './tools/rollup/ignore-css.mjs';
import processCss from './tools/rollup/process-css.mjs';
import coreComponentsTypingsResolver from './tools/rollup/core-components-typings-resolver.mjs';
import createPackageJson from './tools/rollup/create-package-json.mjs';
import { compiledDarkmodeGenerator } from './tools/rollup/compiled-darkmode-generator.mjs';

const require = createRequire(import.meta.url);

const { ScriptTarget } = ts;

const currentPackageDir = process.cwd();

const currentPkg = path.join(currentPackageDir, 'package.json');

const rootPkg = require(path.resolve(currentPackageDir, '../../package.json'));
const pkg = require(currentPkg);

const currentComponentName = pkg.name.replace('@alfalab/core-components-', '');

const baseConfig = {
    cache: false,
    input: [
        'src/**/*.{ts,tsx}',
        '!src/**/*.{test,stories}.{ts,tsx}',
        '!src/**/*.mdx',
        '!src/**/*.d.ts',
    ],
    plugins: [wildcardExternal(['@alfalab/core-components-*/*'])],
    external: [...Object.keys(pkg.dependencies || {}), ...Object.keys(pkg.peerDependencies || {})],
};

const multiInputPlugin = multiInput.default();

const copyPlugin = (dest) =>
    copy({
        flatten: false,
        targets: [{ src: ['src/**/*.{png,svg,jpg,jpeg}', '!**/__image_snapshots__/**'], dest }],
    });

const postcssPlugin = postcss.default({
    modules: {
        generateScopedName: function (name, fileName) {
            const relativeFileName = path.relative(currentPackageDir, fileName);

            const hash = generateClassNameHash(pkg.name, rootPkg.version, relativeFileName);

            return `${currentComponentName}__${name}_${hash}`;
        },
    },
    extract: true,
    separateCssFiles: true,
    packageName: pkg.name,
    packageVersion: pkg.version,
});

/**
 * Сборка ES5 с commonjs модулями.
 */
const es5 = {
    ...baseConfig,
    output: [
        {
            dir: 'dist',
            format: 'cjs',
            interop: 'compat',
            plugins: [addCssImports({ currentPackageDir })],
        },
    ],
    plugins: [
        ...baseConfig.plugins,
        multiInputPlugin,
        typescript({
            tsconfig: (resolvedConfig) => ({
                ...resolvedConfig,
                tsBuildInfoFile: 'tsconfig.tsbuildinfo',
            }),
        }),
        json(),
        postcssPlugin,
        copyPlugin('dist'),
        copy({ targets: [{ src: ['../../bin/send-stats.js', 'package.json'], dest: 'dist' }] }),
        compiledDarkmodeGenerator(`${currentPackageDir}/dist`),
    ],
};

/**
 * Сборка ES2020 с esm модулями.
 */
const modern = {
    ...baseConfig,
    output: [
        {
            dir: 'dist/modern',
            format: 'esm',
            generatedCode: 'es2015',
            plugins: [
                addCssImports({ currentPackageDir }),
                coreComponentsResolver({ importFrom: 'modern' }),
            ],
        },
    ],
    plugins: [
        ...baseConfig.plugins,
        multiInputPlugin,
        typescript({
            outDir: 'dist/modern',
            tsconfig: (resolvedConfig) => ({
                ...resolvedConfig,
                target: ScriptTarget.ES2020,
                tsBuildInfoFile: 'tsconfig.tsbuildinfo',
            }),
        }),
        json(),
        postcssPlugin,
        copyPlugin('dist/modern'),
    ],
};

/**
 * Сборка ES5 с commonjs модулями.
 * Css-модули поставляются как есть, не компилируются.
 */
const cssm = {
    ...baseConfig,
    output: [
        {
            dir: 'dist/cssm',
            format: 'cjs',
            interop: 'compat',
            plugins: [coreComponentsResolver({ importFrom: 'cssm' })],
        },
    ],
    plugins: [
        ...baseConfig.plugins,
        multiInputPlugin,
        ignoreCss(),
        typescript({
            outDir: 'dist/cssm',
            tsconfig: (resolvedConfig) => ({
                ...resolvedConfig,
                tsBuildInfoFile: 'tsconfig.tsbuildinfo',
            }),
        }),
        json(),
        processCss(),
        copyPlugin('dist/cssm'),
    ],
};

/**
 * Сборка ES5 с esm модулями.
 */
const esm = {
    ...baseConfig,
    output: [
        {
            dir: 'dist/esm',
            format: 'esm',
            plugins: [
                addCssImports({ currentPackageDir }),
                coreComponentsResolver({ importFrom: 'esm' }),
            ],
        },
    ],
    plugins: [
        ...baseConfig.plugins,
        multiInputPlugin,
        typescript({
            outDir: 'dist/esm',
            tsconfig: (resolvedConfig) => ({
                ...resolvedConfig,
                tsBuildInfoFile: 'tsconfig.tsbuildinfo',
            }),
        }),
        json(),
        postcssPlugin,
        copyPlugin('dist/esm'),
    ],
};

const rootDir = `../../dist/${currentComponentName}`;

/**
 * Сборка рут-пакета
 */
const root = {
    input: ['dist/**/*.js'],
    external: baseConfig.external,
    plugins: [
        ...baseConfig.plugins,
        multiInput.default({
            relative: 'dist',
        }),
        copy({
            flatten: false,
            targets: [
                { src: ['dist/**/*', '!**/*.js'], dest: rootDir },
                {
                    src: 'package.json',
                    dest: `../../dist/${currentComponentName}`,
                    transform: () => createPackageJson('./esm/index.js'),
                },
            ],
        }),
        coreComponentsRootPackageResolver({ currentPackageDir }),
    ],
    output: [
        {
            dir: rootDir,
            plugins: [coreComponentsTypingsResolver({ rootDir })],
        },
    ],
};

const configs = (
    process.env.BUILD_ESM_ONLY === 'true'
        ? [esm, root]
        : [es5, modern, esm, currentComponentName !== 'themes' && cssm, root]
).filter(Boolean);

export default configs;
