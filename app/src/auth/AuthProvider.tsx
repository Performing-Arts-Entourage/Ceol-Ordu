import { useSupabase } from '@/utilities/supabase';
import { Session } from '@supabase/supabase-js';
import { createContext, PropsWithChildren, useContext, useEffect, useState } from 'react';
import { SignInOptions } from './SignInOptions';
import { signUserIn } from './signUserIn';

interface AuthState {
    session?: Session | null;
    signUserIn: (options: SignInOptions) => Promise<void>;
}

const defaultState: AuthState = {
    signUserIn: () => Promise.resolve()
};

const AuthContext = createContext<AuthState>(defaultState);

export const useAuth = () => useContext(AuthContext);

type Properties = PropsWithChildren<{}>;

export const AuthProvider = ({ children }: Properties) => {
    const [session, setSession] = useState<Session | null>();

    const supabase = useSupabase();

    async function getSession() {
        const { data: { session } } = await supabase.auth.getSession();

        setSession(session);
    }

    function watchAuthState() {
        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session);
        });

        return subscription;
    }

    useEffect(() => {
        getSession();

        const subscription = watchAuthState();

        return () => {
            subscription.unsubscribe();
        };
    }, []);

    const state = {
        session,
        signUserIn
    };

    return (
        <AuthContext.Provider value={state}>
            {children}
        </AuthContext.Provider>
    );
};
