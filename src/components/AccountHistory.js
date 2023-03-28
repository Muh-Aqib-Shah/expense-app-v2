import React, { useContext } from 'react';
import { initialState } from '../context/GlobalContext';
import { Transaction } from './Transaction';


export const History = () => {

    let {transactions} = useContext(initialState);
   let actions = transactions
   console.log("ACTION",actions);
    return(
        <div className = "transactions">
      History
   <hr/>
      {actions.map(action=>(
        <Transaction transaction={action}/>
      ))}
      <hr/>
        </div> 
        
)}