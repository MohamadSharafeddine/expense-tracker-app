import { StyleSheet, Text, View } from "react-native";
import React, { useContext, useEffect } from "react";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "../store/context/expenses-context";
import { getDateMinusDays } from "../util/date";
import { fetchExpenses } from "../util/http";
// import { useSelector } from "react-redux";

const RecentExpenses = () => {
  const expensesContext = useContext(ExpensesContext);
  // const expenses = useSelector((state) => state.expenses.expenses);

  useEffect(() => {
    async function getExpenses() {
      const expenses = await fetchExpenses();
      expensesContext.setExpenses(expenses);
    }
    getExpenses();
  }, []);

  const recentExpenses = expensesContext.expenses.filter((expense) => {
    const today = new Date();
    const days7DaysAgo = getDateMinusDays(today, 7);
    return expense.date >= days7DaysAgo && expense.date <= today;
  });

  return (
    <ExpensesOutput
      expenses={recentExpenses}
      expensesPeriod="Last 7 Days"
      fallbackText={"No expenses registered for the last 7 days..."}
    />
  );
};

export default RecentExpenses;

const styles = StyleSheet.create({});
