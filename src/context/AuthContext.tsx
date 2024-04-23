"use client";
import React, { createContext, useState, useContext, useEffect } from 'react';

interface User {
  name: string;
  email: string;
  username:string;
}

interface AuthContextType {
  error:any;
  user: User | null;
  isLoading: boolean;
  signup: (userData: { email: string; password: string; username: string }) => Promise<void>;
  signIn: (credentials: { email: string; password: string; username: string}) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
  error:null,
  user: null,
  isLoading: true,
  signup: async () => {},
  signIn: async () => {},
  logout: () => {},
});

export const AuthProvider = ({ children }:{children:any}) => {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const signup = async (userData: { email: string; password: string; username: string }) => {
    try {
      console.log('sending 222')
      setIsLoading(true);
      const response = await fetch('https://createcamp.onrender.com/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
      const data = await response.json();
      console.log(data, "Response auth")
      if (data){
      setUser(data);
      console.log(user, "user response")
      }
    } catch (error:any) {
      console.error('Signup failed:', error);
      if(error){
        setError(error)
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    console.log(user, "user response 2");
  }, [user]);

  

  const signIn = async (credentials: { email: string; password: string; username:string }) => {
    try {
      // Simulate asynchronous signin process
      setIsLoading(true);
      // Example: Call your API to authenticate the user
      const response = await fetch('/api/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });
      const data = await response.json();
      setUser(data.user);
    } catch (error) {
      console.error('Signin failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    // Implement your logout logic here
    setUser(null);
  };

  // Simulating asynchronous login process
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <AuthContext.Provider value={{ user, error, isLoading, signup, signIn, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => useContext(AuthContext);
