import ExpenseItem from "./components/Expenses/ExpenseItem";
import NewExpense from "./components/NewExpense/NewExpense";
import Expense from "./components/Expenses/Expense";
import React, { useState } from "react";

const dummy_data = [
  {
    id: 'e1',
    title: 'Rent',
    amount: 5000,
    date: new Date(2020, 7, 14),
  },
  { 
    id: 'e2', 
    title: 'Invested', 
    amount: 10000, 
    date: new Date(2021, 2, 12) },

  {
    id: 'e3',
    title: 'Buy Books',
    amount: 3000,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'Some Outfits',
    amount: 4500,
    date: new Date(2021, 5, 12),
  },
];




function App() {
  const [expenses, setExpenses] = useState(dummy_data)
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  
  return (
    <div>
      <NewExpense onAddExpense = {addExpenseHandler}/>
      <Expense items={expenses} />
    </div>
  );
}

export default App;
