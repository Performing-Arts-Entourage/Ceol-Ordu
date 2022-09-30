import { PropsWithChildren } from 'react';

type Properties = PropsWithChildren<{}>;

export const Layout = ({ children }: Properties) => {
    return (
        <>
            {children}
        </>
    );
};
