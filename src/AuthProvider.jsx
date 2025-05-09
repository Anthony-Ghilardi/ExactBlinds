import React, {createContext, useState, useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./firebase/firebaseConfig";

export const AuthContext = createContext()
export default function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            setUser(user || null);
            setLoading(false);
        });
        return () => unsubscribe();
    }, []);

    function logout() {
        signOut(auth);
    }

    return (
        <div>
            <AuthContext.Provider value={{ user, loading, logout }}>{children}</AuthContext.Provider>
        </div>
    )
}