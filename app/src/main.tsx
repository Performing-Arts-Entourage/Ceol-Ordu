import { AuthProvider } from '@/auth';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { CaptchaProvider } from './components';
import { router } from './routes';

import './assets/css/main.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <AuthProvider>
            <CaptchaProvider>
                <RouterProvider router={router} />
            </CaptchaProvider>
        </AuthProvider>
    </React.StrictMode>
);
