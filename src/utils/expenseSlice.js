import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  expenses: [],
};

const expensetSlice = createSlice({
  name: "expenses",
  initialState,
  reducers: {
    addExpense: (state, action) => {
      state.expenses.push(action.payload);
    },
    removeExpense: (state, action) => {
      state.expenses = state.expenses.filter((expense) => expense.id !== action.payload);
    },
  },
});

export const { addExpense, removeExpense } = expensetSlice.actions;
export default expensetSlice.reducer;
