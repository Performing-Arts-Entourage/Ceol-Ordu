import { UserSignInMethod } from './UserSignInMethod.enum';

export interface UserAuthenticationBase {
    email?: string;
    password?: string;
    phone?: string;
    signInMethod: UserSignInMethod;
}
