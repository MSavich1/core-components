import React, { ChangeEvent, FC, forwardRef, RefAttributes } from 'react';

import { InputProps } from '@alfalab/core-components-input';
import {
    BaseSelect,
    BaseSelectProps,
    Optgroup as DefaultOptgroup,
    Option as DefaultOption,
    OptionsList as DefaultOptionsList,
} from '@alfalab/core-components-select';

import { AutocompleteField } from './autocomplete-field';

export type InputAutocompleteDesktopProps = Omit<BaseSelectProps, 'Field' | 'nativeSelect'> & {
    /**
     * Компонент ввода значения
     */
    Input?: FC<InputProps & RefAttributes<HTMLInputElement>>;

    /**
     * Пропсы, которые будут прокинуты в инпут
     */
    inputProps?: InputProps & Record<string, unknown>;

    /**
     * Значение поля ввода
     */
    value?: string;

    /**
     * Поле доступно только для чтения
     */
    readOnly?: InputProps['readOnly'];

    /**
     * Отображение иконки успеха
     */
    success?: boolean;

    /**
     * Обработчик ввода
     */
    onInput?: (event: ChangeEvent<HTMLInputElement>) => void;

    /**
     * Хранит функцию, с помощью которой можно обновить положение поповера
     */
    updatePopover?: BaseSelectProps['updatePopover'];
};

export const InputAutocompleteDesktop = forwardRef<HTMLInputElement, InputAutocompleteDesktopProps>(
    (
        {
            OptionsList = DefaultOptionsList,
            Optgroup = DefaultOptgroup,
            Option = DefaultOption,
            Input,
            inputProps = {},
            onInput,
            value,
            success,
            readOnly,
            closeOnSelect = false,
            options,
            ...restProps
        },
        ref,
    ) => (
        <BaseSelect
            ref={ref}
            autocomplete={true}
            options={options}
            closeOnSelect={closeOnSelect}
            Option={Option}
            Field={AutocompleteField}
            fieldProps={{
                Input,
                onInput,
                value,
                inputProps,
                readOnly,
                success,
            }}
            Optgroup={Optgroup}
            OptionsList={OptionsList}
            {...restProps}
        />
    ),
);
