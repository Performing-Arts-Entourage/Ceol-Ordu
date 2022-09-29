import { useAuth } from '@/auth';

export const App = () => {
    const { session } = useAuth();

    return (
        <>
            <h1>Hi</h1>

            {session ? <p>Logged in!</p> : <small>Signed out D:</small>}
        </>
    );
};
