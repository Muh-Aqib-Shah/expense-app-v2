import React, { useContext } from 'react';
import { initialState } from '../context/GlobalContext';

export const Summary = () => {
    let { transactions } = useContext(initialState);
    console.log("SUMMARY",transactions.length)
    const getIncome = () => {
        let income=0
        for(let i=0;i<transactions.length;++i){
            if((Number(transactions[i].amount)) > 0 ){
                income = income + transactions[i].amount
            }
        }
        return income
    }
    const getExpense = () => {
        let expense=0
        for(let i=0;i<transactions.length;++i){
            if((Number(transactions[i].amount)) < 0 ){
                expense = expense + transactions[i].amount
            }
        }
        return expense
    }
    
    return(
        <div className = "balance-box">
        <div className = "income">Income<br/><span className='pos'>${getIncome()}</span></div>
        <div className = "middle"></div>
        <div className = "expense">Expense<br/><span className='neg'>${getExpense()}</span></div>
        </div>
    
    )
}