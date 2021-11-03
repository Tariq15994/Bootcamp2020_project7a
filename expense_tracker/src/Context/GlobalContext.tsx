import React , {createContext, useReducer} from 'react';
import AddTransaction from '../components/AddTransaction';
import { initialStateType, TransactionType } from '../Types/TransactionType';
import { TransactionReducer } from './Reduce';

const initialstate:initialStateType = {
    Transaction:[{
        id:1,
        text:'cash',
        amount: 200
    }],
    addTransaction:() => {},
    deleteTransaction:() => {}
}

// export default function 



export const TransactionContext = createContext(initialstate);

export const TransactionProvider= ({children})=>{
    const [state, dispatch] = useReducer(TransactionReducer,initialstate)

    function addTransaction(transactionData:TransactionType){
        dispatch({
            type:'ADD_TRANSACTION',
            payload:transactionData
        })
        return(

        )
    }

    return (
        <TransactionContext.Provider value={}    
    )
};












// import React, {useState , createContext, useReducer} from "react";
// import  TransactionReducer  from "./Reduce";
// import {TransactionType , initialStateType} from '../Types/TransactionType';
// // type initailTrans = {
// //     transactions : [

// //     ]}
// const initialstate: initialStateType = {
//     Transaction: [{ id: 1, text: "Cash", amount: 200 }],
//     // deleteTransaction: () => {},
//     addTransaction: () => {},
//   };

// // const InitialTransaction = {
// //     Transaction : [ {
// //         id :1,
// //         desc: "Tariq fee",
// //         amount: 300
// //     }
// //     ],
// // }

// export const TransactionContext = createContext(initialstate);


// const TransactionProvider: React.FC = ({children})=>{
    
//     const [state, dispatch] = useReducer(TransactionReducer, initialstate);

//     function addTransaction(TransactionObject:TransactionType) {
//         dispatch({
//             type: "ADD_TRANSACTION",
//             payload: {
                
//                 amount: TransactionObject.amount,
//                 text: TransactionObject.text
//             },
//         });

//     }
    
//     return (
//         <div>
//         <TransactionContext.Provider value={{
//             Transaction: state.Transaction,
//             addTransaction:addTransaction
          
//         }

//         }>
//             {children}
//         </TransactionContext.Provider>
//         </div>
//     )
// }
// export default TransactionProvider;




  










