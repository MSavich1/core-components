import {
    setupScreenshotTesting,
    createStorybookUrl,
    openBrowserPage,
    matchHtml,
    closeBrowser,
    createSpriteStorybookUrl,
} from '../../screenshot-utils';

const screenshotTesting = setupScreenshotTesting({
    it,
    beforeAll,
    afterAll,
    expect,
});

describe(
    'Attach | screenshots',
    screenshotTesting({
        cases: [
            [
                'sprite',
                createSpriteStorybookUrl({
                    componentName: 'Attach',
                    knobs: {
                        buttonContent: 'Выберите файл',
                        noFileText: 'Нет файла',
                        size: ['xs', 's', 'm', 'l'],
                    },
                    size: { width: 400, height: 100 },
                }),
            ],
        ],
    }),
);

describe('Attach | interactions tests', () => {
    test('Attach file', async () => {
        const pageUrl = createStorybookUrl({
            componentName: 'Attach',
            knobs: {
                buttonContent: 'Выберите файл',
                size: 'l',
                progressBarPercent: 75,
            },
        });

        const { browser, context, page, css } = await openBrowserPage(pageUrl);

        try {
            const [fileChooser] = await Promise.all([
                page.waitForEvent('filechooser'),
                page.click('button[class*=component]'),
            ]);

            await fileChooser.setFiles({
                name: 'my-file.pdf',
                buffer: Buffer.from([]),
                mimeType: 'application/pdf',
            });

            await matchHtml({ context, page, expect, css });
        } catch (error) {
            // eslint-disable-next-line no-console
            console.error((error as Error).message);

            throw error;
        } finally {
            await closeBrowser({ browser, context, page });
        }
    });
});
