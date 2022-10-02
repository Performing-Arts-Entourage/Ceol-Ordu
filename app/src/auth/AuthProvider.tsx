import { account, client } from '@/utilities/appwrite';
import { Models } from 'appwrite';
import { createContext, PropsWithChildren, useContext, useEffect, useState } from 'react';
import { SignInOptions } from './SignInOptions';
import { SignUpOptions } from './SignUpOptions';
import { signUserIn } from './signUserIn';
import { signUserUp } from './signUserUp';

interface AuthState {
    account?: Models.Account<Models.Preferences>;
    session?: Models.Session;
    signUserIn: (options: SignInOptions) => Promise<void>;
    signUserUp: (options: SignUpOptions) => Promise<void>;
}

const defaultState: AuthState = {
    signUserIn: () => Promise.resolve(),
    signUserUp: () => Promise.resolve()
};

const AuthContext = createContext<AuthState>(defaultState);

export const useAuth = () => useContext(AuthContext);

type Properties = PropsWithChildren<{}>;

export const AuthProvider = ({ children }: Properties) => {
    const [account, setAccount] = useState<Models.Account<Models.Preferences>>();
    const [session, setSession] = useState<Models.Session>();

    useEffect(() => {
        return client.subscribe('account', (payload) => {
            console.log(payload);
        });
    }, []);

    const state = {
        account,
        session,
        signUserIn: async (options: SignInOptions) => {
            const existingAccount = await signUserIn(options);

            setSession(existingAccount);
        },
        signUserUp: async (options: SignUpOptions) => {
            const newAccount = await signUserUp(options);

            setAccount(newAccount);
        }
    };

    return (
        <AuthContext.Provider value={state}>
            {children}
        </AuthContext.Provider>
    );
};
