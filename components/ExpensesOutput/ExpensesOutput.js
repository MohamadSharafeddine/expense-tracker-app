import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 94.12,
    date: new Date(2020, 7, 14),
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
];

const ExpensesOutput = ({ expenses, expensesPeriod }) => {
  return (
    <View>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList />
    </View>
  );
};

export default ExpensesOutput;

const styles = StyleSheet.create({});
