import React from "react";

export default function IncomeExpense(){
    return(
        <div className='expense-container'>
            <div>
                <h2 className={'heading income-color '}>Income</h2>
                <p className="income-value">$200</p>
            </div>
        
            <div>
                <h2 className={'heading expense-color'}>Expense</h2>
                <p className='expense-value'>$200</p>
            </div>

        </div>
    )
}



