import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";

const RecentExpenses = () => {
  return (
    <View>
      <ExpensesOutput expensesPeriod="Last 7 Days" />
    </View>
  );
};

export default RecentExpenses;

const styles = StyleSheet.create({});
