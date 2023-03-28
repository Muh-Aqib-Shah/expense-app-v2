import React,{ createContext, useReducer} from "react";
import AppReducer from "./AppReducer";

let Data ={
   transactions : [
  ]
}

export const initialState = createContext(Data);


export const GlobalContext = ({children}) => {

    const [state,dispatch] = useReducer(AppReducer,Data)
    const addInfo = (Obj) => {
        dispatch({
            type : "ADD_TRANSACTION",
            payload:{
                id: Obj.id,
                description:Obj.description,
                amount:Obj.amount,
            },
        })
    }
    const delInfo = (id) => {
        dispatch({
            type : "DELETE_TRANSACTION",
            payload:id
            
        })}
    return(
        <initialState.Provider value={{
            transactions : state.transactions,
            addInfo,
            delInfo
        }
        }>
        {children}
        </initialState.Provider>
    )
}