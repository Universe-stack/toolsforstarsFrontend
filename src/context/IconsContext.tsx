//@ts-nocheck
"use client"

import { createContext, useState } from "react"

export const IconsContext = createContext();


export const IconsContextProvider = ({children}) => {
    const [icon, setIcon] = useState('alltools')
    return <IconsContext.Provider value={{icon, setIcon}} >{children}</IconsContext.Provider>
}