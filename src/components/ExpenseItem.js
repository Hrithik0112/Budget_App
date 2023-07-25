// src/components/ExpenseItem.js
import React from "react";

const ExpenseItem = ({ expense, onRemove }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <p>{expense.description}</p>
      <p>{expense.amount}</p>
      <button
        onClick={() => onRemove(expense.id)}
        className="mt-2 bg-red-500 text-white py-1 px-2 rounded"
      >
        Remove
      </button>
    </div>
  );
};

export default ExpenseItem;
