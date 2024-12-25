import { StyleSheet, Text, View } from "react-native";
import React from "react";

const ExpensesOutput = ({ expenses }) => {
  return (
    <View>
      <View>
        <Text>Last 7 Days</Text>
        <Text>$177.95</Text>
      </View>
      <Text>ExpensesOutput</Text>
    </View>
  );
};

export default ExpensesOutput;

const styles = StyleSheet.create({});
