import React, { useContext } from "react";
import {TransactionContext} from '../Context/GlobalContext';
import { TransactionPropType } from "../Types/TransactionType";
export  const DelTransaction: React.FC<TransactionPropType> = ({trans})=>{
    const { deleteTransaction } = useContext(TransactionContext);

    return (
        <li>
            {trans.text}
            <span>{trans.amount}</span>
            <button className="delete-btn"
                    onClick={() => deleteTransaction(trans.id)}>
                X
            </button>
            <div className= "empty"></div>
        </li>
        
    )
}



