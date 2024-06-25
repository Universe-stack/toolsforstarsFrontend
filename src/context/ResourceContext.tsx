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
  pagination: number;
}

const initialState: ResourceFetch = {
  saasResources: null,
  saasFiltered: null,
  appsResources: null,
  appsFiltered: null,
  courseResources: null,
  courseFiltered: null,
  isLoading: false,
  pagination:0,

};

type Action =
  | { type: 'SET_SAAS'; payload: ResourceForm }
  | { type: 'SET_FILTERED_SAAS'; payload: ResourceForm }
  | { type: 'SET_APPS'; payload: ResourceForm }
  | { type: 'SET_FILTERED_APPS'; payload: ResourceForm } 
  | { type: 'SET_COURSES'; payload: CourseForm } 
  | { type: 'SET_FILTERED_COURSES'; payload: CourseForm }
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_PAGINATION'; payload: number }

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
    case 'SET_PAGINATION':
        return { ...state, pagination: action.payload };
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


    const handleFetchAllSaas = async (page = 1) => {
      try {
        console.log('fetching...');
        dispatch({ type: 'SET_LOADING', payload: true });
        const res = await fetch(`https://createcamp.onrender.com/tools/saas?page=${page}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const data = await res.json(); // Parse JSON data once
        console.log(data, "Saas data");
    
        if (res.ok) {
          dispatch({ type: 'SET_SAAS', payload: data });
          dispatch({ type: 'SET_PAGINATION', payload: data.pagination });
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

    const handleFetchFilteredSaas = async (sortBy) => {
      try {
        console.log('Fetching filtered Saas tools...');
        dispatch({ type: 'SET_LOADING', payload: true });
        console.log(sortBy, "SortBy")
    
        const response = await fetch(`https://createcamp.onrender.com/tools/saas/filterResults?sortBy=${sortBy}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
    
        if (!response.ok) {
          throw new Error(`Failed to fetch filtered Saas tools. Status: ${response.status}`);
        }
    
        const data = await response.json();
        console.log('Filtered Saas data:', data);
    
        dispatch({ type: 'SET_FILTERED_SAAS', payload: data });
      } catch (error) {
        console.error('Error fetching filtered Saas tools:', error);
        dispatch({ type: 'SET_FILTERED_SAAS', payload: { message: 'An error occurred while fetching Saas tools. Please try again.' } });
      } finally {
        dispatch({ type: 'SET_LOADING', payload: false });
      }
    };
    

    const handleFetchAllApps = async () => {
      try {
        console.log('fetching...');
        dispatch({ type: 'SET_LOADING', payload: true });
        const res = await fetch('https://createcamp.onrender.com/tools/apps', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const data = await res.json(); // Parse JSON data once
        console.log(data, "Apps data");
    
        if (res.ok) {
          dispatch({ type: 'SET_APPS', payload: data });
        } else {
          const errorMessage = data.message || "An error occurred. Please try again.";
          dispatch({ type: 'SET_APPS', payload: { message: errorMessage } });
        }
      } catch (error) {
        console.error('Fetching apps failed:', error);
        dispatch({ type: 'SET_APPS', payload: { message: 'Fetching appps failed. Please try again.' } });
      } finally {
        dispatch({ type: 'SET_LOADING', payload: false });
      }
    };
  
    const handleFetchAllCourses = async () => {
      try {
        console.log('fetching...');
        dispatch({ type: 'SET_LOADING', payload: true });
        const res = await fetch('https://createcamp.onrender.com/tools/courses', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const data = await res.json(); // Parse JSON data once
        console.log(data, "Courses data");
    
        if (res.ok) {
          dispatch({ type: 'SET_COURSES', payload: data });
        } else {
          const errorMessage = data.message || "An error occurred. Please try again.";
          dispatch({ type: 'SET_COURSES', payload: { message: errorMessage } });
        }
      } catch (error) {
        console.error('Fetching courses failed:', error);
        dispatch({ type: 'SET_COURSES', payload: { message: 'Fetching courses failed. Please try again.' } });
      } finally {
        dispatch({ type: 'SET_LOADING', payload: false });
      }
    };
  
  
  return (
    <ResourceContext.Provider value={{ state, dispatch, handleFetchAllSaas, handleFetchAllApps, handleFetchAllCourses, handleFetchFilteredSaas }}>
      {children}
    </ResourceContext.Provider>
  );
};

export const useResource = () => useContext(ResourceContext);
