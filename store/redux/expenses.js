import { createSlice } from "@reduxjs/toolkit";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 94.12,
    date: new Date(2024, 11, 24),
  },
  {
    id: "e2",
    description: "A new shirt",
    amount: 45.99,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e3",
    description: "A new phone",
    amount: 799.49,
    date: new Date(2024, 12, 24),
  },
  {
    id: "e4",
    description: "A new laptop",
    amount: 1500,
    date: new Date(2021, 5, 12),
  },
  {
    id: "e5",
    description: "Groceries",
    amount: 200,
    date: new Date(2021, 5, 12),
  },
  {
    id: "e6",
    description: "Groceries",
    amount: 200,
    date: new Date(2021, 5, 12),
  },
  {
    id: "e7",
    description: "Groceries",
    amount: 200,
    date: new Date(2021, 5, 12),
  },
  {
    id: "e8",
    description: "Groceries",
    amount: 200,
    date: new Date(2021, 5, 12),
  },
  {
    id: "e9",
    description: "Groceries",
    amount: 200,
    date: new Date(2021, 5, 12),
  },
  {
    id: "e10",
    description: "Groceries",
    amount: 200,
    date: new Date(2021, 5, 12),
  },
];

const expensesSlice = createSlice({
  name: "expenses",
  initialState: {
    expenses: DUMMY_EXPENSES,
  },
  reducers: {
    addExpense(state, action) {
      state.expenses.push({
        ...action.payload,
        id: new Date().toString() + Math.random().toString(),
      });
    },
    deleteExpense(state, action) {
      state.expenses = state.expenses.filter(
        (expense) => expense.id !== action.payload
      );
    },
    updateExpense(state, action) {
      const expenseIndex = state.expenses.findIndex(
        (expense) => expense.id === action.payload.id
      );
      state.expenses[expenseIndex] = {
        ...state.expenses[expenseIndex],
        ...action.payload.data,
      };
    },
  },
});

export const { addExpense, deleteExpense, updateExpense } =
  expensesSlice.actions;
export default expensesSlice.reducer;
