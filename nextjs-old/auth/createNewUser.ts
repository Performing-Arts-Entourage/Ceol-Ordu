import { createUserWithEmailAndPassword, sendSignInLinkToEmail } from '@firebase/auth';
import { auth } from '../utilities/firebase';
import { UserAuthenticationBase } from './UserAuthenticationBase';
import { UserSignInMethod } from './UserSignInMethod.enum';

interface CreateNewUserOptions extends UserAuthenticationBase {
}

export async function createNewUser({ email, password, signInMethod }: CreateNewUserOptions) {
    switch (signInMethod) {
        // case UserSignInMethod.EmailMagicLink:
        //     window.localStorage.setItem('emailForSignIn', email);

        //     await sendSignInLinkToEmail(auth, email, { url: process.env.APP_URL || '' });

        //     break;

        case UserSignInMethod.EmailPassword:
            if (!email) throw new Error('The email is required for Email/Password authentication.');
            if (!password) throw new Error('The password is required for Email/Password authentication.');

            await createUserWithEmailAndPassword(auth, email, password);

            break;
    }
}
