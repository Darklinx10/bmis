"use client";

import { auth } from "@/lib/firebase";
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

  // Monitor authentication state
    useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
        setLoading(false);
    });

    return () => unsubscribe();
    }, []);

  // Login function
    const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
    };

  // Logout function
    const logout = () => {
    return signOut(auth);
    };

    return (
    <AuthContext.Provider value={{ user, login, logout }}>
        {!loading && children}
    </AuthContext.Provider>
    );
}

// Custom hook to access the context
export function useAuth() {
    return useContext(AuthContext);
}
