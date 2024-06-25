//@ts-nocheck
"use client"

import { useContext,createContext, useReducer } from "react";

// Define initial state
const initialState = {
  title:'',
  price: 0,
  description:'',
  paid: false,
  duration:0,
  link:'',
  image: '',
  adSpace: '',
  startingDate:'',
  campaignBudget:0,
  loading:false,
  success:false,
  error:'',
};

// Define action types
const SET_TITLE = 'SET_TITLE';
const SET_PRICE = 'SET_PRICE';
const SET_DESCRIPTION = 'SET_DESCRIPTION';
const SET_PAID = 'SET_PAID';
const SET_DURATION = 'SET_DURATION'
const SET_LINK = 'SET_LINK';
const SET_IMAGE = 'SET_IMAGE';
const SET_ADSPACE = 'SET_ADSPACE';
const SET_STARTINGDATE = 'SET_STARTINGDATE';
const SET_CAMPAIGNBUDGET = 'SET_CAMPAIGNBUDGET';
const SET_LOADING = 'SET_LOADING';
const SET_SUCCESS = 'SET_SUCCESS';
const SET_ERROR = 'SET_ERROR';


// Define reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case SET_PRICE:
      return { ...state, price: action.payload };
    case SET_DESCRIPTION:
      return { ...state, description: action.payload };
    case SET_PAID:
      return { ...state, paid: action.payload };
    case SET_DURATION:
      return { ...state, duration: action.payload };
    case SET_TITLE:
      return { ...state, title: action.payload };
    case SET_LINK:
      return { ...state, link: action.payload };
    case SET_IMAGE:
      return { ...state, image: action.payload };
    case SET_ADSPACE:
      return { ...state, adSpace: action.payload };
    case SET_STARTINGDATE:
      return { ...state, startingDate: action.payload };
    case SET_CAMPAIGNBUDGET:
      return { ...state, campaignBudget: action.payload };
    case SET_LOADING:
      return { ...state, loading: action.payload };
    case SET_SUCCESS:
      return { ...state, success: action.payload };
    case SET_ERROR:
      return { ...state, error: action.payload };
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


const setDuration = (duration) => ({
    type: SET_DURATION,
    payload: duration,
});

const setTitle = (title) => ({
  type: SET_TITLE,
  payload: title,
});

const setLink = (link) => ({
  type: SET_LINK,
  payload: link,
});

const setImage= (image) => ({
  type: SET_IMAGE,
  payload: image,
});

const setStartingDate = (startingDate) => ({
  type: SET_STARTINGDATE,
  payload: startingDate,
});

const setAdspace = (adspace) => ({
  type: SET_ADSPACE,
  payload: adspace,
});

const setCampaignBudget = (campaignBudget) => ({
  type: SET_CAMPAIGNBUDGET,
  payload: campaignBudget,
});

const setLoading = (loading) => ({
  type: SET_LOADING,
  payload: loading,
});

const setSuccess = (success) => ({
  type: SET_SUCCESS,
  payload: success,
});

const setError = (error) => ({
  type: SET_ERROR,
  payload: error,
});


export const PaymentsContext = createContext();

export const PaymentsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <PaymentsContext.Provider value={{ state, dispatch, setPrice, setDescription,setPaid, setDuration, setLink, setTitle, setAdspace, setStartingDate,setImage, setCampaignBudget, setLoading, setSuccess, setError}}>
      {children}
    </PaymentsContext.Provider>
  );
};

export const usePayments = () => useContext(PaymentsContext);
