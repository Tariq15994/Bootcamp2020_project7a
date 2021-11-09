import React , {useContext} from "react";
import { TransactionContext } from "../Context/GlobalContext";
// import getIncome, getExpense from './IncomeExpense';
export default function Balance(){
    let { Transaction } = useContext(TransactionContext);

    const getIncome = () => {
        let income = 0;
        for (var i = 0; i < Transaction.length; i++) {
            if (Transaction[i].amount > 0)
                income = income + Transaction[i].amount

        }
        return income;
    }
    const getExpense = () => {

        let expense = 0;
        for (var i = 0; i < Transaction.length; i++) {
            if (Transaction[i].amount < 0)
                expense = expense + Transaction[i].amount

        }
        return expense;
    }
    return (
        <div className='balance-container'>
            <h2 className='balance textcenter'>Balance</h2>
           
           <h2 className='balance textcenter'>${getIncome()+getExpense()}</h2>
        </div>
    )
}



