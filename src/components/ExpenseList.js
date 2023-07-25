// src/components/ExpenseList.js
import React from "react";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = ({ expenses, onRemove }) => {
  // Make sure to destructure the `expenses` prop correctly
  return (
    <div>
      {expenses.map((expense) => (
        <ExpenseItem key={expense.id} expense={expense} onRemove={onRemove} />
      ))}
    </div>
  );
};

export default ExpenseList;
