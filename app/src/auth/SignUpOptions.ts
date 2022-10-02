import { SignUpMethod } from './SignUpMethod.enum';

export interface SignUpOptions {
    email?: string;
    password: string;
    phoneNumber?: string;
    type: SignUpMethod;
}
