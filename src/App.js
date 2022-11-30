import React from "react";
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Header from "./component/Expense-Tracker/Header.jsx";
import Balance from "./component/Expense-Tracker/Balance";
import IncomeExpense from "./component/Expense-Tracker/IncomeExpense";
import TransactionList from "./component/Expense-Tracker/TransactionList";
import AddTransaction from "./component/Expense-Tracker/AddTransaction";
import { useState } from "react";

const App=()=>{

  const[transactions,setTransactions]=useState([
    {id:1011,transactionTitle:"Salary",amount:1500},
    {id:1012,transactionTitle:"Trip",amount:-270},
    {id:1013,transactionTitle:"Rent",amount:-380},
    {id:1014,transactionTitle:"Food",amount:-100},
    {id:1015,transactionTitle:"Cab",amount:-500},
  ])


  const addTransactionHandler=(transaction)=>{
    const transactionCopy=[...transactions]
    transactionCopy.push(transaction)
    setTransactions(transactionCopy)

  }

  const onDeleteTransactionHandler=(transactionId)=>{
    const transactionCopy=[...transactions]
    const newTransactions=transactionCopy.filter(transaction=>transaction.id!==transactionId)

    setTransactions(newTransactions)
    
  }



  return(
    <div className="main">
      <div className="container-fluid">
        <Header title="Expense Tracker"/>
      </div>
      <div className="container">
        <Balance transactions={transactions}/>
      </div>
      <div>
        <IncomeExpense  transactions={transactions}/>
      </div>
      <div>
        <TransactionList transactions={transactions} clicked={onDeleteTransactionHandler} />
      </div>
      <div>
        <AddTransaction transactions={transactions} clicked={addTransactionHandler} />
      </div>
      
    </div>
  )
}

export default App;



