import {
    FIREBASE_API_KEY,
    FIREBASE_APP_ID,
    FIREBASE_AUTH_DOMAIN,
    FIREBASE_MEASUREMENT_ID,
    FIREBASE_MESSAGING_SENDER_ID,
    FIREBASE_PROJECT_ID,
    FIREBASE_STORAGE_BUCKET
} from '@/variables';
import { FirebaseOptions, getApps, initializeApp } from 'firebase/app';
import { getAuth, RecaptchaVerifier } from 'firebase/auth';

declare global {
    interface Window {
        recaptchaVerifier: unknown;
    }
}

const configuration: FirebaseOptions = {
    apiKey: FIREBASE_API_KEY,
    appId: FIREBASE_APP_ID,
    authDomain: FIREBASE_AUTH_DOMAIN,
    measurementId: FIREBASE_MEASUREMENT_ID,
    messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
    projectId: FIREBASE_PROJECT_ID,
    storageBucket: FIREBASE_STORAGE_BUCKET
};

if (!getApps().length) {
    initializeApp(configuration);
}

export const auth = getAuth();

window.recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
    size: 'invisible',
    callback: () => { }
}, auth);
