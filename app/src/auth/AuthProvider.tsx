import { createContext, PropsWithChildren, useContext, useEffect, useState } from 'react';
import { SignInOptions } from './SignInOptions';
import { SignUpOptions } from './SignUpOptions';
import { signUserIn } from './signUserIn';
import { signUserUp } from './signUserUp';

interface AuthState {
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
    const state = {
        signUserIn,
        signUserUp
    };

    return (
        <AuthContext.Provider value={state}>
            {children}
        </AuthContext.Provider>
    );
};
