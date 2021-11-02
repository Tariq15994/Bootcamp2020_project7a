import React from 'react';
import './App.css';
import Balance from './components/Balance';
import Header from './components/Header';
import IncomeExpense from './components/IncomeExpense';
import AddTransaction from './components/ AddTransaction';
// import DelTransaction from './components/DelTransaction';
import TransactionHistory from './components/TransactionHistory';

function App() {
  return (
    <div className='header'>
      <Header />
      <Balance />
      <IncomeExpense />
      <TransactionHistory />
      <AddTransaction />
      
    </div>
  );
}

export default App;
