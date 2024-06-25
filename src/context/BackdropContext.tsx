//@ts-nocheck
"use client"

import { useContext,createContext, useReducer } from "react";

// Define initial state
const initialState = {
  backdrop: false,
};

// Define action types
const SET_BACKDROP = 'SET_BACKDROP';

// Define reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case SET_BACKDROP:
      return { ...state, backdrop: action.payload };
    default:
      return state;
  }
};

// Create action creators
const setBackdrops = (backdrop) => ({
  type: SET_BACKDROP,
  payload: backdrop,
});

export const BackdropContext = createContext();

export const BackdropContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <BackdropContext.Provider value={{ state, dispatch, setBackdrops }}>
      {children}
      {state.backdrop && <div className="backdrop"></div>}
    </BackdropContext.Provider>
  );
};

export const useBackdrop = () => useContext(BackdropContext);
