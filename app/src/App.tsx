import { Layout } from '@/components';
import { Outlet } from 'react-router-dom';

export const App = () => {
    return (
        <Layout>
            <Outlet />
        </Layout>
    );
};
