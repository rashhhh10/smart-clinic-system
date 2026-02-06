import { createContext, useState, useEffect, useContext } from 'react';
import api from '../services/api';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
        setLoading(false);
    }, []);

    const login = async (email, password) => {
        try {
            const response = await api.post('/auth/login', { email, password });
            const { token, ...userData } = response.data.data;
            localStorage.setItem('token', token);
            localStorage.setItem('user', JSON.stringify(userData));
            setUser(userData);
            return { success: true };
        } catch (error) {
            console.error("Login Error:", error);
            // Fallback for Demo Mode if backend is unreachable
            if (!error.response) {
                const mockUser = {
                    name: 'Demo User',
                    email: email,
                    role: 'PATIENT',
                    id: 999
                };
                localStorage.setItem('token', 'demo-token');
                localStorage.setItem('user', JSON.stringify(mockUser));
                setUser(mockUser);
                return { success: true, message: "Demo Mode: Login Successful (Backend unreachable)" };
            }
            return { success: false, message: error.response?.data?.message || 'Login failed' };
        }
    };

    const register = async (data) => {
        try {
            const response = await api.post('/auth/register', data);
            const { token, ...userData } = response.data.data;
            localStorage.setItem('token', token);
            localStorage.setItem('user', JSON.stringify(userData));
            setUser(userData);
            return { success: true };
        } catch (error) {
            console.error("Registration Error:", error);
            // Fallback for Demo Mode if backend is unreachable
            if (!error.response) {
                const mockUser = {
                    name: data.name,
                    email: data.email,
                    role: data.role || 'PATIENT',
                    id: 999
                };
                localStorage.setItem('token', 'demo-token');
                localStorage.setItem('user', JSON.stringify(mockUser));
                setUser(mockUser);
                return { success: true, message: "Demo Mode: Registration Successful (Backend unreachable)" };
            }
            return { success: false, message: error.response?.data?.message || 'Registration failed' };
        }
    };

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, register, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
