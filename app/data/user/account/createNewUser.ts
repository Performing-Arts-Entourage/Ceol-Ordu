import { createUserWithEmailAndPassword, sendSignInLinkToEmail } from "@firebase/auth";
import { auth } from "../../../utilities/firebase";

export enum UserSignInMethod {
    EmailMagicLink = 'email-magic-link',
    EmailPassword = 'email-password'
}

export interface CreateNewUserOptions {
    email: string;
    password: string;
}

export async function createNewUser({ email, password }: CreateNewUserOptions) {
    const credential = await createUserWithEmailAndPassword(auth, email, password);
}
