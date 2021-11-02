import React ,{useContext} from "react";
import { TransactionContext } from "../Context/GlobalContext";
export default function TransactionHistory(){
    const {transactions} = useContext(TransactionContext);
    return(
        <div>
            <h1>Transaction History</h1>
            <hr />
            <ul>
                {transactions.map((transaction)=>{
                    return (<li>
                        <span>{transaction.desc}</span>
                        <span>{transaction.amount}</span>
                        </li>)}
                    )}
            </ul>
           
            
        </div>
    )
};