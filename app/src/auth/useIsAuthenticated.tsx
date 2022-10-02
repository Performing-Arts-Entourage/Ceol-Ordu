import { useAuth } from './AuthProvider';

export const useIsAuthenticated = () => {
    const { } = useAuth();

    return false;
};
