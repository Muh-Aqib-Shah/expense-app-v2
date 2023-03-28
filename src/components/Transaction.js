import { initialState } from "../context/GlobalContext";
import { useContext } from 'react';

export const Transaction = ({transaction}) => {

    const { delInfo } = useContext(initialState);
    return(
        <li className = {transaction.amount>0 ? "pos-li":"neg-li"} key={transaction.id}>
            <span>{transaction.description}</span><span>${transaction.amount}</span>
            <button className="delete-btn"
                    onClick={() => delInfo(transaction.id)}>
                X
            </button>
            </li>
    )
}