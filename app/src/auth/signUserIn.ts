import { useSupabase } from '@/utilities/supabase';
import { SignInMethod } from './SignInMethod.enum';
import { SignInOptions } from './SignInOptions';

export const signUserIn = async ({ email, password, phoneNumber, type }: SignInOptions) => {
    const supabase = useSupabase();

    switch (type) {
        case SignInMethod.emailPassword:
            if (!email) throw new Error('The email is required.');
            if (!password) throw new Error('The password is required.');

            await supabase.auth.signInWithPassword({ email, password });

            break;
        case SignInMethod.emailOneTimePassword:
            if (!email) throw new Error('The email is required.');

            await supabase.auth.signInWithOtp({ email });

            break;
        case SignInMethod.phonePassword:
            if (!phoneNumber) throw new Error('The phone number is required.');
            if (!password) throw new Error('The password is required.');

            await supabase.auth.signInWithPassword({ phone: phoneNumber, password });

            break;
        case SignInMethod.phoneOneTimePassword:
            if (!phoneNumber) throw new Error('The phone number is required.');

            await supabase.auth.signInWithOtp({ phone: phoneNumber });

            break;
    }
};
