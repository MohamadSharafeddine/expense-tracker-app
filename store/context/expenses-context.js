import { createContext, useReducer } from "react";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 94.12,
    date: new Date(2020, 1, 1),
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
    date: new Date(2021, 2, 28),
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

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  updateExpense: (id, { description, amount, date }) => {},
  deleteExpense: (id) => {},
});

function expensesReducer(state, action) {
  switch (action.type) {
    case "ADD":
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id: id }, ...state];
    case "UPDATE":
      const updatableExpenseIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      const updatableExpense = state[updatableExpenseIndex];
      const updatedItem = { ...updatableExpense, ...action.payload.data };
      const updatedExpenses = [...state];
      updatedExpenses[updatableExpenseIndex] = updatedItem;
      return updatedExpenses;
    case "DELETE":
      return state.filter((expense) => expense.id !== action.payload);
    default:
      return state;
  }
}

function ExpensesContextProvider({ children }) {
  const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

  function addExpense(expenseData) {
    dispatch({ type: "ADD", payload: expenseData });
  }

  function updateExpense(id, expenseData) {
    dispatch({ type: "UPDATE", payload: { id: id, data: expenseData } });
  }

  function deleteExpense(id) {
    dispatch({ type: "DELETE", payload: id });
  }

  return <ExpensesContext.Provider>{children}</ExpensesContext.Provider>;
}

export default ExpensesContextProvider;
