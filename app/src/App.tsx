import { useAuth } from '@/auth';
import { Layout } from '@/components';
import { Outlet } from 'react-router-dom';

export const App = () => {
    const { session } = useAuth();

    return (
        <Layout>
            <h1>Hi</h1>

            {session ? <p>Logged in!</p> : <small>Signed out D:</small>}

            <Outlet />
        </Layout>
    );
};
