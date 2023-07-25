import React, { useState, useEffect } from "react";
import ExpenseForm from "./ExpenseForm";
import TotalAmount from "./Totalamount";
import IncomeForm from "./IncomeForm";
import ExpenseList from "./ExpenseList";
import { useDispatch } from "react-redux";

const Dashboard = () => {
  const [totalAmount, setTotalAmount] = useState(0);
  const [expenses, setExpenses] = useState([]);
  const [income, setIncome] = useState([]);
  const dispatch = useDispatch();

  // Function to add an expense
  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
    setTotalAmount((prevTotal) => prevTotal - expense.amount);
  };

  // Function to add an income
  const addIncome = (incomeItem) => {
    setIncome([...income, incomeItem]);
    setTotalAmount((prevTotal) => prevTotal + incomeItem.amount);
  };

  // Function to remove an expense
  const onRemove = (expenseId) => {
    // Find the expense that matches the provided ID
    const removedExpense = expenses.find((expense) => expense.id === expenseId);

    if (removedExpense) {
      // Reduce the expense amount from the total amount
      setTotalAmount((prevTotal) => prevTotal + removedExpense.amount);
      // {((prevTotal) => prevTotal - removedExpense.amount)}
      // Filter out the removed expense from the expenses state
      setExpenses((prevExpenses) => prevExpenses.filter((expense) => expense.id !== expenseId));
    }
  };

  // Calculate the total amount whenever expenses change
  // useEffect(() => {
  //   const expensesTotal = expenses.reduce((acc, expense) => acc + expense.amount, 0);
  //   setTotalAmount(expensesTotal);
  // }, [expenses]);

  return (
    <div>
      <h1 className="font-bold text-4xl text-green-600 pt-10 ml-10">
        Welcome Back ,
        <span className="text-white bg-green-300 font-semibold rounded-md px-3">User</span>
      </h1>
      <div className=" w-max flex mt-10 p-10 ">
        <TotalAmount totalAmount={totalAmount} />
      </div>
      <div className="flex">
        <IncomeForm addIncome={addIncome} />
        <ExpenseForm totalAmount={totalAmount} addExpense={addExpense} />
        <ExpenseList expenses={expenses} onRemove={onRemove} />
      </div>
    </div>
  );
};

export default Dashboard;
