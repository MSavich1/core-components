import {
    createStorybookUrl,
    openBrowserPage,
    matchHtml,
    closeBrowser,
} from '../../screenshot-utils';

describe('CalendarInput | interactions tests', () => {
    test('Open calendar', async () => {
        const pageUrl = createStorybookUrl({
            componentName: 'CalendarInput',
            knobs: {
                value: '25.03.2021',
                label: 'Дата регистрации',
                defaultMonth: 1613310391747,
            },
        });

        const { browser, context, page, css } = await openBrowserPage(pageUrl);

        try {
            await matchHtml({ context, page, expect, css });

            await page.click('input');

            await matchHtml({
                context,
                page,
                expect,
                css,
            });
        } catch (error) {
            // eslint-disable-next-line no-console
            console.error((error as Error).message);

            throw error;
        } finally {
            await closeBrowser({ browser, context, page });
        }
    });
});
