import { auth } from '@/utilities/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { SignUpMethod } from './SignUpMethod.enum';
import { SignUpOptions } from './SignUpOptions';

export const signUserUp = async ({ email, password, phoneNumber, type }: SignUpOptions) => {
    switch (type) {
        case SignUpMethod.emailPassword:
            if (!email) throw new Error('The email is required.');
            if (!password) throw new Error('The password is required.');

            await createUserWithEmailAndPassword(auth, email, password);

            break;
        case SignUpMethod.phonePassword:
            if (!phoneNumber) throw new Error('The phone number is required.');
            if (!password) throw new Error('The password is required.');



            break;
    }
};
