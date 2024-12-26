import { StyleSheet, Text, View } from "react-native";
import React, { useContext, useLayoutEffect } from "react";
import IconButton from "../components/UI/IconButton";
import { GlobalStyles } from "../constants/styles";
import Button from "../components/UI/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  addExpense,
  deleteExpense,
  updateExpense,
} from "../store/redux/expenses";
// import { ExpensesContext } from "../store/context/expenses-context";

const ManageExpense = ({ route, navigation }) => {
  // const expensesContext = useContext(ExpensesContext);
  const dispatch = useDispatch();
  const expenses = useSelector((state) => state.expenses.expenses);

  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  function deleteExpenseHandler() {
    // expensesContext.deleteExpense(editedExpenseId);
    dispatch(deleteExpense(editedExpenseId));
    navigation.goBack();
  }

  function confirmHandler() {
    if (isEditing) {
      // expensesContext.updateExpense(editedExpenseId, {
      dispatch(
        updateExpense({
          id: editedExpenseId,
          data: {
            description: "Test Updated",
            amount: 9.99,
            date: new Date("2024-12-01"),
          },
        })
      );
    } else {
      // expensesContext.addExpense({
      dispatch(
        addExpense({
          description: "Test Added",
          amount: 19.99,
          date: new Date("2024-12-25"),
        })
      );
    }
    navigation.goBack();
  }

  function cancelHandler() {
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <Button style={styles.button} mode="flat" onPress={cancelHandler}>
          Cancel
        </Button>
        <Button style={styles.button} onPress={confirmHandler}>
          {isEditing ? "Update" : "Add"}
        </Button>
      </View>
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon="trash"
            color={GlobalStyles.colors.error500}
            size={36}
            onPress={deleteExpenseHandler}
          />
        </View>
      )}
    </View>
  );
};

export default ManageExpense;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  },

  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },

  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: "center",
  },
});
