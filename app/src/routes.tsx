import { createBrowserRouter } from 'react-router-dom';
import { App } from './App';
import {
    AccountCreated,
    ErrorPage,
    Home,
    SignIn,
    SignUp
} from './pages';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Home />
            }
        ]
    },
    {
        path: 'signup',
        element: <SignUp />
    },
    {
        path: 'signin',
        element: <SignIn />
    },
    {
        path: 'account-created',
        element: <AccountCreated />
    }
]);
