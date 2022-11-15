const ignoredModules = ['simplebar'];

module.exports = {
    preset: 'ts-jest/presets/js-with-ts',
    testEnvironment: 'jest-environment-jsdom-sixteen',
    setupFilesAfterEnv: ['./packages/setupTests.ts'],
    modulePathIgnorePatterns: ['dist'],
    globalSetup: './packages/globalSetup.ts',
    globals: {
        'ts-jest': {
            babelConfig: {
                plugins: [
                    '@babel/plugin-proposal-optional-chaining',
                    '@babel/plugin-proposal-nullish-coalescing-operator',
                ],
            },
        },
    },
    moduleNameMapper: {
        '@alfalab/core-components-(.*)/(.*)$': '<rootDir>/packages/$1/src/$2',
        '@alfalab/core-components-(.*)$': '<rootDir>/packages/$1/src',
        '\\.css$': 'identity-obj-proxy',
        '\\.(svg|png|jpg)$': '<rootDir>/__mocks__/fileMock.ts',
    },
    testMatch: ['**/*.test.ts?(x)', '!**/*.screenshots.test.ts?(x)'],
    testPathIgnorePatterns: ['codemod'],
    transformIgnorePatterns: [`node_modules/(?!${ignoredModules.join('|')})`],
    coverageReporters: ['lcov', 'text', 'text-summary', 'clover'],
    coveragePathIgnorePatterns: ['index.ts'],
};
