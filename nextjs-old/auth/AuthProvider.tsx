import { onAuthStateChanged, User } from 'firebase/auth';
import { createContext, PropsWithChildren, useContext, useEffect, useState } from 'react';
import { auth } from '../utilities/firebase';

interface AuthState {
    user?: User | null;
}

const defaultContextState: AuthState = {
    user: null
};

const AuthContext = createContext(defaultContextState);

export const useAuth = () => useContext(AuthContext);

type Properties = PropsWithChildren<{

}>;

export const AuthProvider = ({ children }: Properties) => {
    const [user, setUser] = useState<User | null>();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
        });

        return () => unsubscribe();
    }, []);

    const state: AuthState = {
        user
    };

    return (
        <AuthContext.Provider value={state}>
            {children}
        </AuthContext.Provider>
    );
};
