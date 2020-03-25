/**
 * Vendor
 */

import React, { InputHTMLAttributes } from 'react';
import cn from 'classnames';

/**
 * Styles
 */

import styles from './Component.module.css';

/**
 * Types
 */

export type PureInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> & {
    /** Флаг - растягивать инпута на ширину контейнера */
    block?: boolean;
    /** Атрибут type */
    htmlType?: 'number' | 'card' | 'email' | 'hidden' | 'money' | 'password' | 'tel' | 'text';
    /** Размер компонента */
    size?: 's' | 'm' | 'l';
    /** Id компонента для тестов */
    dataTestId?: string;
};

/**
 * Expo
 */

export const PureInput = React.forwardRef<HTMLInputElement, PureInputProps>(
    (
        { size = 's', htmlType = 'text', block = false, className, dataTestId, ...restProps },
        ref,
    ) => (
        <input
            {...restProps}
            className={cn(className, styles.component, styles[size], {
                [styles.block]: block,
            })}
            ref={ref}
            type={htmlType}
            data-test-id={dataTestId}
        />
    ),
);
