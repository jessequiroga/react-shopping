import React, {
    createContext,
    PropsWithChildren,
    useEffect,
    useMemo,
    useState,
} from 'react';
import firebase from 'firebase';
import { firebaseService } from '../firebase';

export type User = firebase.User | null;

interface AuthContextProps {
    readonly user?: User;
}

interface AuthContextType {
    readonly user: User;
}

export const AuthContext = createContext<AuthContextType>({
    user: null,
});

export function AuthContextProvider({
    children,
}: PropsWithChildren<AuthContextProps>) {
    const [user, setUser] = useState<firebase.User | null>(null);

    const value = useMemo<AuthContextType>(() => ({ user }), [user]);

    useEffect(() => {
        firebaseService.getRedirectResult().then(({ user }) => {
            setUser(user);
        });

        firebaseService.onAuthStateChanged(setUser);
    }, []);

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
}
