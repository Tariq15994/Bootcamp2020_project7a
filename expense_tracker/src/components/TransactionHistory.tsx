import React ,{useContext} from "react";
import { TransactionContext } from "../Context/GlobalContext";
import { TransactionType } from "../Types/TransactionType";
import {DelTransaction} from './DelTransaction';
export default function TransactionHistory(){
    const {Transaction} = useContext(TransactionContext);
    return(
        <div>
            <h2 className="history">Transaction History</h2>
            <hr className='hr' />
            <ul className="transaction-list">
      {Transaction.map((trans: TransactionType) => (
        <DelTransaction trans={trans} key={trans.id} />
      ))}      </ul>
            
        </div>
    )
};

