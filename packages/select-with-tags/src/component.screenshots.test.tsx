import {
    createStorybookUrl,
    closeBrowser,
    matchHtml,
    openBrowserPage,
} from '../../screenshot-utils';

describe('SelectWithTags | interactions tests', () => {
    jest.setTimeout(120000);

    ['default', 'click'].map(async (theme: string) =>
        test(`${theme} — main scenario`, async () => {
            const pageUrl = createStorybookUrl({
                componentName: 'SelectWithTags',
                testStory: false,
                knobs: {},
            });

            const { browser, context, page, css } = await openBrowserPage(
                `${pageUrl}&theme=${theme}`,
            );

            const viewport = { width: 420, height: 768 };

            await page.setViewportSize(viewport);

            const match = async () =>
                matchHtml({
                    context,
                    page,
                    expect,
                    css,
                    viewport,
                    matchImageSnapshotOptions: {
                        failureThresholdType: 'percent',
                        failureThreshold: 1,
                    },
                });

            try {
                await page.click('[role="combobox"]');

                await page.click('[role="option"]:nth-child(1)');
                await page.click('[role="option"]:nth-child(2)');
                await page.click('[role="option"]:nth-child(3)');

                await page.fill('input', 'sadsadad');

                await match();

                await page.fill('input', 'niu');

                await match();

                await page.click('[role="option"]:nth-child(1)');

                await match();

                await page.click('[role="option"]:nth-child(4)');

                await match();

                await page.click('[data-collapse]');

                await match();

                await page.click('[class*=tagCross]');

                await match();
            } catch (error) {
                // eslint-disable-next-line no-console
                console.error((error as Error).message);
            } finally {
                await closeBrowser({ browser, context, page });
            }
        }),
    );

    test.skip('hover & pressed', async () => {
        const pageUrl = createStorybookUrl({
            componentName: 'SelectWithTags',
            testStory: false,
            knobs: {},
        });

        const { browser, context, page, css } = await openBrowserPage(pageUrl);

        const viewport = { width: 420, height: 768 };

        await page.setViewportSize(viewport);

        try {
            await page.click('[role="combobox"]');

            await page.click('[role="option"]:nth-child(4)');
            await page.click('[role="option"]:nth-child(5)');
            await page.click('[role="option"]:nth-child(6)');

            // Ждем пока исчезнет скролл.
            await page.waitForTimeout(1000);

            await matchHtml({
                context,
                page,
                expect,
                css,
                viewport,
                evaluate: (remotePage) =>
                    remotePage
                        .hover('[class*=tagCross]')
                        .then(() => remotePage.mouse.down())
                        .then(() => remotePage.waitForTimeout(500)),
            });
        } catch (error) {
            // eslint-disable-next-line no-console
            console.error((error as Error).message);

            throw error;
        } finally {
            await closeBrowser({ browser, context, page });
        }
    });

    test('collapseTagList', async () => {
        const pageUrl = createStorybookUrl({
            componentName: 'SelectWithTags',
            testStory: false,
            knobs: {
                collapseTagList: false,
            },
        });

        const { browser, context, page, css } = await openBrowserPage(pageUrl);

        const viewport = { width: 420, height: 768 };

        await page.setViewportSize(viewport);

        const match = async () =>
            matchHtml({
                context,
                page,
                expect,
                css,
                viewport,
                matchImageSnapshotOptions: {
                    failureThresholdType: 'percent',
                    failureThreshold: 1,
                },
            });

        try {
            await page.click('[role="combobox"]');

            await page.click('[role="option"]:nth-child(5)');
            await page.click('[role="option"]:nth-child(6)');
            await page.click('[role="option"]:nth-child(7)');

            await match();
        } catch (error) {
            // eslint-disable-next-line no-console
            console.error((error as Error).message);
        } finally {
            await closeBrowser({ browser, context, page });
        }
    });
});
