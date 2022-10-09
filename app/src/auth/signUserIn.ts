import { auth } from '@/utilities/firebase';
import { sendSignInLinkToEmail, signInWithEmailAndPassword } from 'firebase/auth';
import { SignInMethod } from './SignInMethod.enum';
import { SignInOptions } from './SignInOptions';

export const signUserIn = async ({ email, password, phoneNumber, type }: SignInOptions) => {
    switch (type) {
        case SignInMethod.emailPassword:
            if (!email) throw new Error('The email is required.');
            if (!password) throw new Error('The password is required.');

            await signInWithEmailAndPassword(auth, email, password);

            break;
        case SignInMethod.emailOneTimePassword:
            if (!email) throw new Error('The email is required.');

            await sendSignInLinkToEmail(auth, email, {
                url:
            });

            break;
        case SignInMethod.phonePassword:
            if (!phoneNumber) throw new Error('The phone number is required.');
            if (!password) throw new Error('The password is required.');


            break;
        case SignInMethod.phoneOneTimePassword:
            if (!phoneNumber) throw new Error('The phone number is required.');


            break;
    }
};
