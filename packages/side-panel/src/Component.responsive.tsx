import React, { FC, forwardRef, useContext, useMemo } from 'react';

import { BaseModalProps } from '@alfalab/core-components-base-modal';
import { DrawerProps } from '@alfalab/core-components-drawer';
import { useMatchMedia } from '@alfalab/core-components-mq';

import { isClient } from '../../utils';

import { Closer } from './components/closer/Component';
import { SidePanelDesktop } from './Component.desktop';
import { SidePanelMobile } from './Component.mobile';

export type SidePanelResponsiveProps = BaseModalProps &
    Pick<
        DrawerProps,
        'contentTransitionProps' | 'placement' | 'nativeScrollbar' | 'scrollbarProps'
    > & {
        /**
         * Ширина модального окна
         * @default "s"
         */
        size?: 's';

        /**
         * Управление наличием закрывающего крестика
         * @default false
         */
        hasCloser?: boolean;

        /**
         * Контрольная точка, с нее начинается desktop версия
         * @default 1024
         */
        breakpoint?: number;

        /**
         * Значение по-умолчанию для хука useMatchMedia
         */
        defaultMatchMediaValue?: boolean | (() => boolean);
    };

type View = 'desktop' | 'mobile';

type ResponsiveContext = {
    view?: View;
};

// eslint-disable-next-line @typescript-eslint/no-redeclare
const ResponsiveContext = React.createContext<ResponsiveContext>({
    view: 'desktop',
});

function createResponsive<DesktopType extends FC, MobileType extends FC>(
    desktop: DesktopType,
    mobile: MobileType,
) {
    function ResponsiveChild(props: any) {
        const { view } = useContext(ResponsiveContext);

        const Child = view === 'desktop' ? desktop : mobile;

        return <Child {...props} />;
    }

    return ResponsiveChild as DesktopType | MobileType;
}

const SidePanelResponsiveComponent = forwardRef<HTMLDivElement, SidePanelResponsiveProps>(
    ({ children, breakpoint = 1024, defaultMatchMediaValue, ...restProps }, ref) => {
        const query = `(min-width: ${breakpoint}px)`;
        const getDefaultValue = () => (isClient() ? window.matchMedia(query).matches : false);

        const [isDesktop] = useMatchMedia(query, defaultMatchMediaValue ?? getDefaultValue);

        const view = isDesktop ? 'desktop' : 'mobile';

        const contextValue = useMemo<ResponsiveContext>(() => ({ view }), [view]);

        const Component = isDesktop ? SidePanelDesktop : SidePanelMobile;

        return (
            <ResponsiveContext.Provider value={contextValue}>
                <Component ref={ref} {...restProps}>
                    {children}
                </Component>
            </ResponsiveContext.Provider>
        );
    },
);

export const SidePanelResponsive = Object.assign(SidePanelResponsiveComponent, {
    Header: createResponsive(SidePanelDesktop.Header, SidePanelMobile.Header),
    Content: createResponsive(SidePanelDesktop.Content, SidePanelMobile.Content),
    Footer: createResponsive(SidePanelDesktop.Footer, SidePanelMobile.Footer),
    Closer,
});
