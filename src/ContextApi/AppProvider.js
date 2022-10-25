import React from 'react'
import { useState, createContext } from 'react';

export const AppContext = createContext()
export default function AppProvider({ children }) {

    const [listDogs, setListDogs] = useState([])
    const [valueInput, setValueInput] = useState('')
    const [saveProduct, setSaveProduct] = useState([])
    const [total, setTotal] = useState(0)

    return (
        <AppContext.Provider value={{
            listDogs,
            setListDogs,
            valueInput,
            setValueInput,
            saveProduct,
            setSaveProduct,
            total,
            setTotal
        }}>
            {children}
        </AppContext.Provider>
    )
}
