import { PropsWithChildren } from 'react';
import { MainNav } from './MainNav';

type Properties = PropsWithChildren<{}>;

export const Layout = ({ children }: Properties) => {
    return (
        <>
            <MainNav />

            <main className="mx-auto max-w-7xl p-4 sm:p-6 lg:p-8">
                {children}
            </main>
        </>
    );
};
