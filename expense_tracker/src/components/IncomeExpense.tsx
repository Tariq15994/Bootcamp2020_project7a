import React, {useContext} from "react";
import { TransactionContext } from "../Context/GlobalContext";

export default function IncomeExpense(){
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
    return(
        <div className='expense-container'>
            <div>
                <h2 className={'heading income-color '}>Income</h2>
                <p className="income-value">${getIncome()}</p>
            </div>
        
            <div>
                <h2 className={'heading expense-color'}>Expense</h2>
                <p className='expense-value'>${getExpense()}</p>
            </div>

        </div>
    )
}



