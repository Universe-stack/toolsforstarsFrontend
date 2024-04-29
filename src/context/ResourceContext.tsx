//@ts-nocheck
"use client";
import React, { createContext, useContext, useReducer } from 'react';
import { useRouter } from "next/navigation";

interface ResourceForm {
  name: string;
  email: string;
  username: string;
}

interface CourseForm {
  message: string;
}

interface ResourceFetch {
  saasResources: ResourceForm | null;
  saasFiltered: ResourceForm | null;
  appsResources: ResourceForm | null;
  appsFiltered: ResourceForm | null;
  courseResources: CourseForm | null;
  courseFiltered: CourseForm | null;
  isLoading: boolean;
}

const initialState: ResourceFetch = {
  saasResources: null,
  saasFiltered: null,
  appsResources: null,
  appsFiltered: null,
  courseResources: null,
  courseFiltered: null,
  isLoading: false,
};

type Action =
  | { type: 'SET_SAAS'; payload: ResourceForm }
  | { type: 'SET_FILTERED_SAAS'; payload: ResourceForm }
  | { type: 'SET_APPS'; payload: ResourceForm }
  | { type: 'SET_FILTERED_APPS'; payload: ResourceForm } 
  | { type: 'SET_COURSES'; payload: CourseForm } 
  | { type: 'SET_FILTERED_COURSES'; payload: CourseForm }
  | { type: 'SET_LOADING'; payload: boolean };

const reducer = (state: ResourceFetch, action: Action): ResourceFetch => {
  switch (action.type) {
    case 'SET_SAAS':
      return { ...state, saasResources: action.payload };
    case 'SET_FILTERED_SAAS':
      return { ...state, saasFiltered: action.payload };
    case 'SET_APPS':
      return { ...state, appsResources: action.payload };
    case 'SET_FILTERED_APPS':
      return { ...state, appsFiltered: action.payload };
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload };
    case 'SET_COURSES':
        return { ...state, courseResources: action.payload };
    case 'SET_FILTERED_COURSES':
        return { ...state, courseFiltered: action.payload };
    default:
      return state;
  }
};

const ResourceContext = createContext<{
  state: ResourceFetch;
  dispatch: React.Dispatch<Action>;
}>({
  state: initialState,
  dispatch: () => null,
});

export const ResourceProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const router = useRouter();


    const handleFetchAllSaas = async () => {
      try {
        console.log('fetching...');
        dispatch({ type: 'SET_LOADING', payload: true });
        const res = await fetch('https://createcamp.onrender.com/tools/saas', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const data = await res.json(); // Parse JSON data once
        console.log(data, "Saas data");
    
        if (res.ok) {
          dispatch({ type: 'SET_SAAS', payload: data });
        } else {
          const errorMessage = data.message || "An error occurred. Please try again.";
          dispatch({ type: 'SET_SAAS', payload: { message: errorMessage } });
        }
      } catch (error) {
        console.error('Fetching Saas failed:', error);
        dispatch({ type: 'SET_SAAS', payload: { message: 'Fetching Saas failed. Please try again.' } });
      } finally {
        dispatch({ type: 'SET_LOADING', payload: false });
      }
    };
  
  
  
  return (
    <ResourceContext.Provider value={{ state, dispatch, handleFetchAllSaas }}>
      {children}
    </ResourceContext.Provider>
  );
};

export const useResource = () => useContext(ResourceContext);
