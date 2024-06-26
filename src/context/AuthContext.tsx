//@ts-nocheck
"use client";
import React, { createContext, useContext, useReducer } from 'react';
import { useRouter } from "next/navigation";

interface User {
  id: string;
  name: string;
  username: string;
  email: string;
  role: string;
  createdAt: string;
  updatedAt: string;
}

interface SignUpResult {
  message: string;
}

interface SignInResult {
  message?: string;
  user?: User;
  token?: string;
}

interface AuthState {
  user: User | null;
  signUpResult: SignUpResult | null;
  signInResult: SignInResult | null;
  isLoading: boolean;
}

const initialState: AuthState = {
  user: null,
  signUpResult: null,
  signInResult: null,
  isLoading: false,
};

type Action =
  | { type: 'SET_USER'; payload: User }
  | { type: 'SET_SIGNUP_RESULT'; payload: SignUpResult }
  | { type: 'SET_SIGNIN_RESULT'; payload: SignInResult }
  | { type: 'SET_LOADING'; payload: boolean };

const reducer = (state: AuthState, action: Action): AuthState => {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.payload };
    case 'SET_SIGNUP_RESULT':
      return { ...state, signUpResult: action.payload };
    case 'SET_SIGNIN_RESULT':
      return { ...state, signInResult: action.payload };
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
};

const AuthContext = createContext<{
  state: AuthState;
  dispatch: React.Dispatch<Action>;
}>({
  state: initialState,
  dispatch: () => null,
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const router = useRouter();

  const handleSignup = async (userData: { email: string; password: string; username: string }) => {
    try {
      dispatch({ type: 'SET_LOADING', payload: true });
      const res = await fetch('https://createcamp.onrender.com/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (res.ok) {
        const data = await res.json();
        dispatch({ type: 'SET_SIGNUP_RESULT', payload: data });
      } else {
        const data = await res.json();
        dispatch({ type: 'SET_SIGNUP_RESULT', payload: { message: data.message || "An error occurred. Please try again." } });
      }
    } catch (error: any) {
      console.error('Signup failed:', error);
      dispatch({ type: 'SET_SIGNUP_RESULT', payload: { message: 'Signup failed. Please try again.' } });
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  };

  const handleSignIn = async (userData: { username: string; password: string }) => {
    try {
      dispatch({ type: 'SET_LOADING', payload: true });
      const res = await fetch('https://createcamp.onrender.com/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (res.ok) {
        const data = await res.json();
        dispatch({ type: 'SET_SIGNIN_RESULT', payload: data });
        dispatch({ type: 'SET_USER', payload: data.user }); // Set user in state
      } else {
        const data = await res.json();
        dispatch({ type: 'SET_SIGNIN_RESULT', payload: { message: data.message || "An error occurred. Please try again." } });
      }
    } catch (error: any) {
      console.error('Sign-in failed:', error);
      dispatch({ type: 'SET_SIGNIN_RESULT', payload: { message: 'Sign-in failed. Please try again.' } });
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  };

  return (
    <AuthContext.Provider value={{ state, dispatch, handleSignup, handleSignIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);