// src/components/TotalAmount.js
import React from "react";
import { useSelector } from "react-redux";

const TotalAmount = ({ totalAmount }) => {
  //   const expenses = useSelector((state) => state.expenses.expenses);

  //   const calculateTotalAmount = () => {
  //     return expenses.reduce((totalAmount, expense) => totalAmount - expense.amount, 0);
  //   };

  return (
    <div className="text-xl font-bold mt-4">
      Total Amount: <span className="text-green-500">${totalAmount}</span>
    </div>
  );
};

export default TotalAmount;
