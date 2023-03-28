import React from 'react';
import { useContext } from "react";
import { initialState } from '../context/GlobalContext';

export const Header = () => {
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
        <div className='head'>
        <h2>Expense Tracker By Aqib</h2>
        <h3>Account Balance</h3>
        <h3>${getIncome()+getExpense()}</h3>
        </div>
    )
}