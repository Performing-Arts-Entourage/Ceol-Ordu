import { auth } from '@/utilities/firebase';
import { onAuthStateChanged, User } from 'firebase/auth';
import { createContext, PropsWithChildren, useContext, useEffect, useState } from 'react';
import { SignInOptions } from './SignInOptions';
import { SignUpOptions } from './SignUpOptions';
import { signUserIn } from './signUserIn';
import { signUserUp } from './signUserUp';

interface AuthState {
    user?: User;
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
    const [user, setUser] = useState<User>();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(undefined);
            }
          });

          return unsubscribe;
    }, []);

    const state = {
        user,
        signUserIn: async (options: SignInOptions) => {
            await signUserIn(options);
        },
        signUserUp: async (options: SignUpOptions) => {
            await signUserUp(options);
        }
    };

    return (
        <AuthContext.Provider value={state}>
            {children}
        </AuthContext.Provider>
    );
};
