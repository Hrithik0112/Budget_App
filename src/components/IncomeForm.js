// src/components/IncomeForm.js
import React, { useState } from "react";

const IncomeForm = ({ addIncome }) => {
  const [incomeDescription, setIncomeDescription] = useState("");
  const [incomeAmount, setIncomeAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!incomeDescription || !incomeAmount) return;
    addIncome({
      id: Date.now(),
      description: incomeDescription,
      amount: parseInt(incomeAmount),
    });
    setIncomeDescription("");
    setIncomeAmount("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        placeholder="Income Description"
        value={incomeDescription}
        onChange={(e) => setIncomeDescription(e.target.value)}
        className="p-2 border border-gray-300 rounded"
      />
      <input
        type="number"
        placeholder="Income Amount"
        value={incomeAmount}
        onChange={(e) => setIncomeAmount(e.target.value)}
        className="p-2 border border-gray-300 rounded"
      />
      <button type="submit" className="ml-2 py-2 px-4 bg-green-500 text-white rounded">
        Add Income
      </button>
    </form>
  );
};

export default IncomeForm;
