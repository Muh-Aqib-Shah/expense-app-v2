import React, { useContext, useState } from 'react';
import { initialState } from '../context/GlobalContext';

export const NewTransaction= () => {

  let [Description,SetDescription] = useState()
  let [Amount,SetAmount] = useState()

let {transactions,addInfo} = useContext(initialState)
  const handleAddition = (event) => { 
    event.preventDefault();
    

    if (Number(Amount) === 0) {
        alert("Please enter correct value");
        return false;
    }
    let m = transactions.length;
    m++;
    addInfo({
      id: m,
      description: Description,  
      amount: Number(Amount)
    });

    SetDescription('');
    SetAmount(0)
 
}
    return(
        <div className = "form">
      New Transaction
      <hr></hr>
      <form onSubmit={handleAddition}>
         <label htmlFor="text">Name</label><br/>
         <input type="text" placeholder="Enter Description" required = "required" value={Description} onChange={(e)=>{SetDescription(e.target.value)}}></input><br/>
         <label htmlFor="number">Value</label><br/>
         <input type="number" placeholder="Enter Value" required = "required" value={Amount} onChange={(e)=>{SetAmount(e.target.value)}}></input><br/>
         <input  className = "sub" type="submit" value="Submit"></input>
      </form>
    </div>
    )
}