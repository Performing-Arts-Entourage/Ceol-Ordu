import { SignInMethod } from './SignInMethod.enum';

export interface SignInOptions {
    email?: string;
    password?: string;
    phoneNumber?: string;
    type: SignInMethod;
}
