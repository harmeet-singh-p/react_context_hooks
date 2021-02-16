import React, {createContext, useReducer} from 'react'
import AppReducer from './AppReducer'

//initialize context
const initialState = {
    transactions: [ ]
}


// {id:2, text:'Credit',amount:400},
// {id:3, text:'Debit',amount:300},
// {id:4, text:'Gift',amount:- 350},
// {id:1, text:'Books',amount:- 200}


export const GlobalContext =  createContext(initialState);

const GlobalProvider = ({children}) => {
    const [ state,dispatch] =   useReducer(AppReducer,initialState);

    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANS',
            payload: id
        })       
    }

    function addTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANS',
            payload : transaction
        })
    }

    return (<GlobalContext.Provider value ={{
        transactions : state.transactions,
        deleteTransaction,
        addTransaction
    }} >
    {children}
    </GlobalContext.Provider>);
}

export default GlobalProvider;
