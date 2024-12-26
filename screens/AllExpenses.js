import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { useSelector } from "react-redux";

// import { ExpensesContext } from "../store/context/expenses-context";

const AllExpenses = () => {
  // const expensesContext = useContext(ExpensesContext);
  const expenses = useSelector((state) => state.expenses.expenses);
  return (
    <ExpensesOutput
      expenses={expenses}
      expensesPeriod="Total"
      fallbackText={"No registered expenses found!"}
    />
  );
};

export default AllExpenses;

const styles = StyleSheet.create({});
