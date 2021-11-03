











// // export const TransactionReducer= ((state:any, action:any)=>{
// //     switch (action.type) {
// //         case "Add_TRANSACTION":
// //             return { // [action.payload, ...state]
// //                 ...state , transaction: [action.payload , ...state.transaction]
// //             }
// //         default:
// //             return state;
// //         }
// // });
// export type TransactionType = {
//     id: number;
//     text: string;
//     amount: number;
//   };
//   export type Actions =
//   | { 
//       type: "Delete_Transaction";
//        payload: number 
//   }
//   | { 
//       type: "ADD_TRANSACTION";
//       payload: TransactionType
//   };

// const TransactionReducer = (state:{Transaction: TransactionType[]}, action:Actions)=>{
//     switch (action.type) {
//         case "ADD_TRANSACTION":
//           return {...state,
//             Transaction: [action.payload , ...state.Transaction],
//         }
//         default:
//             return state;
//     }
// }
// export default TransactionReducer;





  