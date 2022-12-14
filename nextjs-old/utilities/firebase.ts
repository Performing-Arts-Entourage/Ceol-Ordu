import { FirebaseOptions, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const configuration: FirebaseOptions = {
    apiKey: process.env.FIREBASE_API_KEY,
    appId: process.env.FIREBASE_APP_ID,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET
};

if (!getApps().length) {
    initializeApp(configuration);
}

export const auth = getAuth();
export const firestore = getFirestore();
export const storage = getStorage();
