import { createBrowserRouter } from 'react-router-dom';
import { App } from './App';
import {
    ErrorPage,
    Home,
    SignUp
} from './pages';
import { SignIn } from './pages/auth/SignIn';

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
    }
]);
