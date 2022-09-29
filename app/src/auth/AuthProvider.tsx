import { useSupabase } from '@/utilities/supabase';
import { Session } from '@supabase/supabase-js';
import { createContext, PropsWithChildren, useContext, useEffect, useState } from 'react';

interface AuthState {
    session?: Session | null;
}

const defaultState: AuthState = {};

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
        session
    };

    return (
        <AuthContext.Provider value={state}>
            {children}
        </AuthContext.Provider>
    );
};
