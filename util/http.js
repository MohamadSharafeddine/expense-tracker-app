import axios from "axios";

export function storeExpense(expenseData) {
  return axios.post(
    "https://expense-tracker-app-727e3-default-rtdb.firebaseio.com/expenses.json",
    expenseData
  );
}
