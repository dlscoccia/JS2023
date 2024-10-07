import { lazy, LazyExoticComponent } from 'react';
import { Nolazy } from '../01-lazyload/pages/Nolazy';

type JSXComponent = () => JSX.Element;

interface Route {
    to: string;
    path: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent;
    name: string;
}

const LazyLayout = lazy(
    () =>
        import(
            /* webpackChunkName: "LazyLayout" */ '../01-lazyload/layout/LazyLayout'
        )
);

export const routes: Route[] = [
    {
        to: '/lazyload',
        path: '/lazyload/*',
        Component: LazyLayout,
        name: 'Lazy',
    },
    {
        to: '/no-lazy',
        path: 'no-lazy',
        Component: Nolazy,
        name: 'No Lazy',
    },
];
