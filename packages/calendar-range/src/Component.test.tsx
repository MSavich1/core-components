import React from 'react';
import { render, waitFor, fireEvent, act } from '@testing-library/react';
import setMonth from 'date-fns/setMonth';
import startOfMonth from 'date-fns/startOfMonth';
import addMonths from 'date-fns/addMonths';
import setDate from 'date-fns/setDate';
import endOfMonth from 'date-fns/endOfMonth';
import startOfDay from 'date-fns/startOfDay';
import addDays from 'date-fns/addDays';
import { MONTHS } from '../../calendar/src/utils';
import { formatDate } from '../../calendar-input/src/utils';

import { CalendarRange } from './index';

jest.useFakeTimers();

describe('CalendarRange', () => {
    const defaultDate = new Date('October 01, 2020 00:00:00');
    const currentDate = new Date();
    const currentMonth = startOfMonth(currentDate);
    const nextMonth = addMonths(currentMonth, 1);
    const currentMonthName = MONTHS[currentMonth.getMonth()];
    const nextMonthName = MONTHS[nextMonth.getMonth()];

    const waitForTransition = () =>
        act(() => {
            jest.advanceTimersByTime(300);
        });

    describe('Display tests', () => {
        it('should match snapshot', () => {
            expect(
                render(<CalendarRange defaultMonth={defaultDate.getTime()} />).container,
            ).toMatchSnapshot();
        });
    });

    it('should set `data-test-id` attribute', () => {
        const testId = 'test-id';
        const { getByTestId } = render(<CalendarRange dataTestId={testId} />);

        expect(getByTestId(testId)).toBeInTheDocument();
    });

    it('should set custom class', () => {
        const className = 'custom-class';
        const { container } = render(<CalendarRange className={className} />);

        expect(container.firstElementChild).toHaveClass(className);
    });

    it('should pass custom props to CalendarInputs', () => {
        const { queryByText } = render(
            <CalendarRange
                inputFromProps={{ leftAddons: 'addonFrom' }}
                inputToProps={{ leftAddons: 'addonTo' }}
            />,
        );

        expect(queryByText('addonFrom')).toBeInTheDocument();
        expect(queryByText('addonTo')).toBeInTheDocument();
    });

    it('should open current and next month by default', () => {
        const { container } = render(<CalendarRange />);

        expect(container).toHaveTextContent(currentMonthName);
        expect(container).toHaveTextContent(nextMonthName);
    });

    it('should open defaultMonth and next month', () => {
        const defaultMonth = setMonth(startOfMonth(new Date()), 4).getTime();

        const { container } = render(<CalendarRange defaultMonth={defaultMonth} />);

        expect(container).toHaveTextContent('Май');
        expect(container).toHaveTextContent('Июнь');
    });

    it('should navigate months by arrows', async () => {
        const defaultMonth = setMonth(startOfMonth(new Date()), 4).getTime();

        const { container, queryAllByLabelText } = render(
            <CalendarRange defaultMonth={defaultMonth} />,
        );

        const [leftPrevMonthButton, rightPrevMonthButton] = queryAllByLabelText(
            'Предыдущий период',
        ) as HTMLButtonElement[];
        const [leftNextMonthButton, rightNextMonthButton] = queryAllByLabelText(
            'Следующий период',
        ) as HTMLButtonElement[];

        fireEvent.click(leftPrevMonthButton);

        expect(container).toHaveTextContent('Апрель');
        expect(container).toHaveTextContent('Июнь');

        fireEvent.click(rightPrevMonthButton);

        expect(container).toHaveTextContent('Апрель');
        expect(container).toHaveTextContent('Май');

        fireEvent.click(leftNextMonthButton);

        expect(container).toHaveTextContent('Май');
        expect(container).toHaveTextContent('Июнь');

        fireEvent.click(rightNextMonthButton);

        expect(container).toHaveTextContent('Май');
        expect(container).toHaveTextContent('Июль');
    });

    it('should use minDate', () => {
        const defaultMonth = setMonth(startOfMonth(new Date()), 4).getTime();
        const minDate = setDate(defaultMonth, 5).getTime();

        const { container, queryAllByLabelText } = render(
            <CalendarRange defaultMonth={defaultMonth} minDate={minDate} />,
        );

        const prevMonthButton = queryAllByLabelText('Предыдущий период')[0] as HTMLButtonElement;

        const firstNonDisabledDayButton = container.querySelector(
            '*[data-date] button:not(:disabled)',
        ) as HTMLButtonElement;
        const date = firstNonDisabledDayButton.parentElement?.dataset.date as string;

        expect(prevMonthButton).toBeFalsy();
        expect(firstNonDisabledDayButton).toHaveTextContent('5');
        expect(new Date(+date).getTime()).toBe(minDate);
    });

    it('should use maxDate', () => {
        const defaultMonth = setMonth(startOfMonth(new Date()), 4).getTime();
        const maxDate = setDate(addMonths(defaultMonth, 1), 25).getTime();

        const { container, queryAllByLabelText } = render(
            <CalendarRange defaultMonth={defaultMonth} maxDate={maxDate} />,
        );

        const nextMonthButtons = queryAllByLabelText('Следующий период') as HTMLButtonElement[];

        const activeDays = container.querySelectorAll('*[data-date] button:not(:disabled)');
        const lastActiveDay = activeDays[activeDays.length - 1].parentElement as HTMLButtonElement;
        const date = lastActiveDay.dataset.date as string;

        expect(nextMonthButtons).toHaveLength(1);
        expect(lastActiveDay).toHaveTextContent('25');
        expect(new Date(+date).getTime()).toBe(maxDate);
    });

    it('should use valueFrom', () => {
        const valueFrom = setDate(currentMonth, 10).getTime();

        const { container } = render(<CalendarRange valueFrom={formatDate(valueFrom)} />);

        const selectedDay = container.querySelector(
            '*[data-date] button.selected',
        ) as HTMLButtonElement;

        const date = selectedDay.parentElement?.dataset.date as string;

        expect(selectedDay).toHaveTextContent('10');
        expect(new Date(+date).getTime()).toBe(valueFrom);
    });

    it('should use valueTo', () => {
        const valueTo = setDate(nextMonth, 10).getTime();

        const { container } = render(<CalendarRange valueTo={formatDate(valueTo)} />);

        const selectedDay = container.querySelector(
            '*[data-date] button.selected',
        ) as HTMLButtonElement;

        const date = selectedDay.parentElement?.dataset.date as string;

        expect(selectedDay).toHaveTextContent('10');
        expect(new Date(+date).getTime()).toBe(valueTo);
    });

    it('should use valueFrom and valueTo both', () => {
        const valueFrom = setDate(currentMonth, 10).getTime();
        const valueTo = setDate(nextMonth, 7).getTime();

        const { container } = render(
            <CalendarRange valueFrom={formatDate(valueFrom)} valueTo={formatDate(valueTo)} />,
        );

        const selectedDays = container.querySelectorAll('*[data-date] button.selected');

        const dayFrom = selectedDays[0].parentElement as HTMLTableDataCellElement;
        const dayTo = selectedDays[1].parentElement as HTMLTableDataCellElement;

        const dateFrom = dayFrom.dataset.date as string;
        const dateTo = dayTo.dataset.date as string;

        expect(selectedDays).toHaveLength(2);
        expect(dayFrom).toHaveTextContent('10');
        expect(dayTo).toHaveTextContent('7');
        expect(new Date(+dateFrom).getTime()).toBe(valueFrom);
        expect(new Date(+dateTo).getTime()).toBe(valueTo);
    });

    it('should open month of valueFrom', () => {
        const valueFrom = setMonth(startOfMonth(new Date()), 4).getTime();

        const { container } = render(<CalendarRange valueFrom={formatDate(valueFrom)} />);

        expect(container).toHaveTextContent('Май');
        expect(container).toHaveTextContent('Июнь');
    });

    describe('isPopover', () => {
        it('should open empty input calendar with month from filled input', async () => {
            const { queryAllByRole } = render(
                <CalendarRange
                    inputFromProps={{ calendarProps: { className: 'from-calendar' } }}
                    inputToProps={{ calendarProps: { className: 'to-calendar' } }}
                    calendarPosition='popover'
                />,
            );

            const [inputFrom, inputTo] = queryAllByRole('textbox') as HTMLInputElement[];

            await waitFor(() => {
                fireEvent.focus(inputFrom);
                expect(
                    document.querySelector('.from-calendar .button.month .buttonContent'),
                ).toHaveTextContent(currentMonthName);
            });

            await waitFor(() => {
                fireEvent.focus(inputTo);
                expect(
                    document.querySelector('.to-calendar .button.month .buttonContent'),
                ).toHaveTextContent(currentMonthName);
            });
        });

        it('should fill "to input" when pick date in "to calendar"', async () => {
            const { queryAllByRole } = render(
                <CalendarRange
                    inputToProps={{ calendarProps: { className: 'to-calendar' } }}
                    calendarPosition='popover'
                />,
            );

            const [inputFrom, inputTo] = queryAllByRole('textbox') as HTMLInputElement[];

            await waitFor(() => {
                fireEvent.focus(inputTo);

                expect(document.querySelector('.to-calendar')).toBeInTheDocument();
            });

            const days = document.querySelectorAll('*[data-date]');

            fireEvent.click(days[0] as HTMLButtonElement);

            expect(inputTo.value).not.toBe('');
            expect(inputFrom.value).toBe('');
        });
    });

    describe('Period selection', () => {
        it('should select day, fill inputFrom and start selection on first click', () => {
            const { container, queryAllByRole } = render(<CalendarRange />);

            const days = container.querySelectorAll('*[data-date] button');
            const inputFrom = queryAllByRole('textbox')[0] as HTMLInputElement;

            fireEvent.click(days[0] as HTMLButtonElement);

            expect(days[0]).toHaveClass('selected');
            expect(inputFrom).toHaveValue(formatDate(currentMonth));

            fireEvent.mouseEnter(days[1]);

            expect(days[0].parentElement).toHaveClass('rangeStart');
            expect(days[1].parentElement).toHaveClass('range');
        });

        it('should select new day, fill inputTo and end selection if clicked on same day twice', () => {
            const { container, queryAllByRole } = render(<CalendarRange />);

            const days = container.querySelectorAll('*[data-date] button');
            const inputFrom = queryAllByRole('textbox')[0] as HTMLInputElement;
            const inputTo = queryAllByRole('textbox')[1] as HTMLInputElement;

            fireEvent.click(days[0] as HTMLButtonElement);

            fireEvent.click(days[0] as HTMLButtonElement);

            expect(days[0]).toHaveClass('selected');
            expect(inputFrom).toHaveValue(formatDate(currentMonth));
            expect(inputTo).toHaveValue(formatDate(currentMonth));

            fireEvent.mouseEnter(days[1]);

            expect(days[1].parentElement).not.toHaveClass('range');
        });

        it('should start selection if clicked on same day thrice', () => {
            const { container, queryAllByRole } = render(<CalendarRange />);

            const days = container.querySelectorAll('*[data-date] button');
            const inputFrom = queryAllByRole('textbox')[0] as HTMLInputElement;
            const inputTo = queryAllByRole('textbox')[1] as HTMLInputElement;

            fireEvent.click(days[0] as HTMLButtonElement);

            fireEvent.click(days[0] as HTMLButtonElement);

            fireEvent.click(days[0] as HTMLButtonElement);

            expect(days[0]).toHaveClass('selected');
            expect(inputFrom).toHaveValue(formatDate(currentMonth));
            expect(inputTo).toHaveValue('');

            fireEvent.mouseEnter(days[1]);

            expect(days[1].parentElement).toHaveClass('range');
        });

        it('should select new day, change inputFrom and inputTo values if clicked date < start date', () => {
            const { container, queryAllByRole } = render(<CalendarRange />);

            const days = container.querySelectorAll('*[data-date] button');
            const inputFrom = queryAllByRole('textbox')[0] as HTMLInputElement;
            const inputTo = queryAllByRole('textbox')[1] as HTMLInputElement;

            fireEvent.click(days[2] as HTMLButtonElement);

            fireEvent.click(days[0] as HTMLButtonElement);

            expect(days[0]).toHaveClass('selected');
            expect(days[2]).toHaveClass('selected');
            expect(inputFrom).toHaveValue(formatDate(startOfMonth(currentMonth)));
            expect(inputTo).toHaveValue(formatDate(addDays(startOfMonth(currentMonth), 2)));

            fireEvent.mouseEnter(days[1]);

            expect(days[0].parentElement).toHaveClass('rangeStart');
            expect(days[1].parentElement).not.toHaveClass('rangeStart');
            expect(days[1].parentElement).toHaveClass('range');
        });

        it('should select day, fill inputTo and end selection if clicked date > start date', () => {
            const { container, queryAllByRole } = render(<CalendarRange />);

            const days = container.querySelectorAll('*[data-date] button');
            const inputTo = queryAllByRole('textbox')[1] as HTMLInputElement;

            fireEvent.click(days[0] as HTMLButtonElement);

            fireEvent.click(days[days.length - 1] as HTMLButtonElement);

            expect(days[days.length - 1]).toHaveClass('selected');
            expect(inputTo).toHaveValue(formatDate(endOfMonth(nextMonth)));

            Array.from(days)
                .slice(1, -1)
                .forEach((day) => expect(day.parentElement).toHaveClass('range'));
        });

        it('should keep selection when month changed', async () => {
            const { container, queryAllByLabelText } = render(<CalendarRange />);

            const firstDay = container.querySelector('*[data-date]') as HTMLButtonElement;
            const nextMonthButton = queryAllByLabelText('Следующий период')[0] as HTMLButtonElement;

            fireEvent.click(firstDay);

            fireEvent.click(nextMonthButton);

            await waitForTransition();

            const days = container.querySelectorAll('*[data-date]');
            const lastDay = days[days.length - 1] as HTMLButtonElement;
            const lastDayDate = new Date(+(lastDay.dataset.date as string));

            fireEvent.click(lastDay);

            expect(lastDayDate.getTime()).toBe(
                startOfDay(endOfMonth(addMonths(currentMonth, 2))).getTime(),
            );

            Array.from(days)
                .slice(0, -1)
                .forEach((day) => expect(day).toHaveClass('range'));
        });
    });

    describe('Callback tests', () => {
        it('should call onDateFromChange callback', async () => {
            const cb = jest.fn();
            const { container } = render(<CalendarRange onDateFromChange={cb} />);

            const calendars = container.querySelectorAll('table');
            fireEvent.click(calendars[0].querySelector('*[data-date]') as HTMLButtonElement);
            fireEvent.click(calendars[1].querySelector('*[data-date]') as HTMLButtonElement);

            expect(cb).toBeCalledTimes(1);

            const { date } = cb.mock.calls[0][0];

            expect(MONTHS[new Date(date).getMonth()]).toBe(currentMonthName);
        });

        it('should call onDateToChange callback', async () => {
            const cb = jest.fn();
            const { container } = render(<CalendarRange onDateToChange={cb} />);

            const calendars = container.querySelectorAll('table');

            fireEvent.click(calendars[0].querySelector('*[data-date]') as HTMLButtonElement);
            fireEvent.click(calendars[1].querySelector('*[data-date]') as HTMLButtonElement);

            expect(cb).toBeCalledTimes(1);

            const { date } = cb.mock.calls[0][0];

            expect(MONTHS[new Date(date).getMonth()]).toBe(nextMonthName);
        });

        it('should call onError callback with "false" arg', async () => {
            const cb = jest.fn();
            render(<CalendarRange onError={cb} valueFrom='10.10.2021' valueTo='10.10.2022' />);

            expect(cb).toBeCalledWith(false);
        });

        it('should call onError callback with "true" arg', async () => {
            const cb = jest.fn();
            render(<CalendarRange onError={cb} valueFrom='10.10.2022' valueTo='10.10.2021' />);

            expect(cb).toBeCalledWith(true);
        });
    });

    describe('Render tests', () => {
        test('should unmount without errors', () => {
            const { unmount } = render(<CalendarRange />);

            expect(unmount).not.toThrowError();
        });
    });
});
