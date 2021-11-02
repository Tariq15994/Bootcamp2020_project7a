import React ,{useContext} from "react";
import { TransactionContext } from "../Context/GlobalContext";
export default function TransactionHistory(){
    const {Transaction} = useContext(TransactionContext);
    return(
        <div>
            <h1>Transaction History</h1>
            <hr />
            <ul>
                {Transaction.map((transaction)=>{
                    return (<li>
                        <span>{transaction.text}</span>
                        <span>{transaction.amount}</span>
                        </li>)}
                    )}
            </ul>
           
            
        </div>
    )
};

