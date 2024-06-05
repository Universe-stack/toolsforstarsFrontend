//@ts-nocheck
"use client"

import { useContext,createContext, useReducer } from "react";

// Define initial state
const initialState = {
  price: 0,
  description:'',
  paid: false,
  duration:0,
  date: ''
};

// Define action types
const SET_PRICE = 'SET_PRICE';
const SET_DESCRIPTION = 'SET_DESCRIPTION';
const SET_PAID = 'SET_PAID';
const SET_DURATION = 'SET_DURATION'
const SET_DATE = 'SET_DATE'; 

// Define reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case SET_PRICE:
      return { ...state, price: action.payload };
    case SET_DESCRIPTION:
      return { ...state, description: action.payload };
    case SET_PAID:
      return { ...state, paid: action.payload };
    case SET_DATE:
      return { ...state, date: action.payload };
    case SET_DURATION:
      return { ...state, duration: action.payload };
    default:
      return state;
  }
};

// Create action creators
const setPrice = (price) => ({
  type: SET_PRICE,
  payload: price,
});

const setDescription = (description) => ({
    type: SET_DESCRIPTION,
    payload: description,
});

const setPaid = (paid) => ({
    type: SET_PAID,
    payload: paid,
});

const setDate = (date) => ({
    type: SET_DATE,
    payload: date,
});

const setDuration = (date) => ({
    type: SET_DURATION,
    payload: date,
});

export const PaymentsContext = createContext();

export const PaymentsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <PaymentsContext.Provider value={{ state, dispatch, setPrice, setDescription, setDate, setPaid, setDuration}}>
      {children}
    </PaymentsContext.Provider>
  );
};

export const usePayments = () => useContext(PaymentsContext);
