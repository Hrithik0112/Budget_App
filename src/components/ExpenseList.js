// src/components/ExpenseList.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ExpenseItem from "./ExpenseItem";
import { removeExpense } from "../utils/expenseSlice";

const ExpenseList = () => {
  const expenses = useSelector((state) => state.expenses.expenses);
  const dispatch = useDispatch();

  const handleRemoveExpense = (id) => {
    dispatch(removeExpense(id));
  };

  return (
    <div>
      {expenses.map((expense) => (
        <ExpenseItem key={expense.id} expense={expense} onRemove={handleRemoveExpense} />
      ))}
    </div>
  );
};

export default ExpenseList;
