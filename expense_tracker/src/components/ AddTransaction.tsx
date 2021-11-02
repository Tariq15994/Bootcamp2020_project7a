import React, { useState , useContext } from 'react';
import { TransactionContext } from '../Context/GlobalContext';
export default function(){
    let [desc , setDesc ] = useState('');
    let [amount, setAmount] = useState(0);
    let [addTran] = 

    return (
        <div>
            <h1 className="history">Add Transaction</h1>
            <hr />
            <form className='transaction-form'>
            <label className='desc'>
                Enter Description 
                <input type="text" required onChange={(ev)=>{setDesc( ev.target.value)} } value={desc} />
            </label>
            <label className='cash'>
                Enter Amount 
                <input type="number" required onChange={(ev)=>{setAmount(ev.target.value)}} value={amount} />
            </label>
            <input type='submit'className='submit'/>
            
            </form>

        </div>
    )
}