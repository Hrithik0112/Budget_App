// src/components/ExpenseForm.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addExpense } from "../utils/expenseSlice";

const ExpenseForm = () => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description || !amount) return;
    dispatch(addExpense({ id: Date.now(), description, amount }));
    setDescription("");
    setAmount("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-4 flex flex-col w-[400px] border border-dashed border-black ml-10 p-5"
    >
      <h3 className="font-semibold text-2xl">Expense Form</h3>
      <label>Category : </label>
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="p-2 border border-gray-300 rounded"
      />
      <label>Amount :</label>
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="p-2 border border-gray-300 rounded"
      />
      <button type="submit" className="w-48 ml-2 py-2 px-3 mt-2 bg-blue-500 text-white rounded">
        Add Expense
      </button>
    </form>
  );
};

export default ExpenseForm;
