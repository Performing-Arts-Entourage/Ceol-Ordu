import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../utilities/firebase';
import { UserAuthenticationBase } from './UserAuthenticationBase';
import { UserSignInMethod } from './UserSignInMethod.enum';

interface SignUserInOptions extends UserAuthenticationBase {
}

export async function signUserIn({ email, password, signInMethod }: SignUserInOptions) {
    switch (signInMethod) {
        // case UserSignInMethod.EmailMagicLink:
        //     window.localStorage.setItem('emailForSignIn', email);

        //     await sendSignInLinkToEmail(auth, email, { url: process.env.APP_URL || '' });

        //     break;

        case UserSignInMethod.EmailPassword:
            if (!email) throw new Error('The email is required for Email/Password authentication.');
            if (!password) throw new Error('The password is required for Email/Password authentication.');

            await signInWithEmailAndPassword(auth, email, password);

            break;
    }
}
