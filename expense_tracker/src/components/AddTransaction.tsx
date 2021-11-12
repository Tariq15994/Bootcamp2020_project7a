import React, { useContext, useState } from "react";
import { TransactionContext } from "../Context/GlobalContext";
// import addTransaction from './'

export default function AddTransaction() {
  const [newAmount, setAmount] = useState<number>();
  const [newText, setText] = useState<string>("");

  const { addTransaction } = useContext(TransactionContext);
  

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (newAmount === 0) {
      console.log('Fill All Input Values')
    }
   
       
    let newTransaction = {
      id: Math.floor(Math.random() * 1000),
      text: newText,
      amount: Number(newAmount)
    }
    addTransaction(newTransaction);
    setAmount(0);
    setText('');
  };


  return (
    <div>

      <h3 className="history">Add new transaction</h3>
      <hr className="hr"/>

      <form onSubmit={handleSubmit} className="transaction-form" >
        <div className="form-control">
          <label htmlFor="text" className='desc'>Transaction Belongs To</label>
          <input type="text" value={newText}
            onChange={(e) => {
              setText(String(e.target.value));
            }} placeholder="Details...." required/>
        </div>
        <div className="form-control">
          <label htmlFor="amount" className='cash'>
            Amount </label >
          <input type="number" value={newAmount === 0 ? "" : newAmount}
            onChange={(e) => {
              setAmount(Number(e.target.value));
            }} placeholder="Enter amount..." required/>
        </div>
        <button className="submit">Submit Transaction</button>
      </form>
    </div>
  )
}























// import React, {createContext , useReducer} from 'react'
// // import { createContext ,useucer } from 'vm';
// import {TransactionType , initialStateType} from '../Types/TransactionType';
// import Reducer from './Reducer';

// const initialstate: initialStateType = {
//     Transaction: [{ id: 1, text: "Cash", amount: 200 }],
//     deleteTransaction: () => {},
//     addTransaction: () => {},
//   };

//   export const TransactionContext = createContext(initialstate);

//   export const TransactionProvider: React.FC = ({ children }) => {
//     const [state, dispatch] = useReducer(Reducer, initialstate);

//     //Actions
//     //Actions types is handiling in  TransactionReducer
//     // function deleteTransaction(id: number) {
//     //   dispatch({
//     //     type: "Delete_Transaction",
//     //     payload: id,
//     //   });
//     // }

//     function addTransaction(transactionData: TransactionType) {
//       dispatch({
//         type: "ADD_TRANSACTION",
//         payload: transactionData,
//       });
//     }

//     return (
//       <div>
//         <TransactionContext.Provider
//           value={{
//             Transaction: state.Transaction,
//             deleteTransaction,
//             addTransaction,
//           }}
//         >
//           {children}
//         </TransactionContext.Provider>
//       </div>
//     );
//   };












