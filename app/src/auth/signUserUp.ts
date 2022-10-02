import { SignUpMethod } from './SignUpMethod.enum';
import { SignUpOptions } from './SignUpOptions';

export const signUserUp = async ({ captchaToken, email, password, phoneNumber, type }: SignUpOptions) => {
    const options = { captchaToken };

    switch (type) {
        case SignUpMethod.emailPassword:
            if (!email) throw new Error('The email is required.');
            if (!password) throw new Error('The password is required.');



            break;
        case SignUpMethod.phonePassword:
            if (!phoneNumber) throw new Error('The phone number is required.');
            if (!password) throw new Error('The password is required.');



            break;
    }
};
