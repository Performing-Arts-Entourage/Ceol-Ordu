import { SignUpMethod } from './SignUpMethod.enum';

export interface SignUpOptions {
    captchaToken?: string;
    email?: string;
    password: string;
    phoneNumber?: string;
    type: SignUpMethod;
}
