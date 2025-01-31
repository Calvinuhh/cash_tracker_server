import BudgetModel from "./Budget";

export default interface ExpenseModel extends BudgetModel {
  budget_id: number;
}

export type CreateExpense = Pick<ExpenseModel, "id" | "name" | "amount">;

export interface UpdateExpenseType
  extends Pick<ExpenseModel, "name" | "amount"> {
  budgetId: number;
  expenseId: number;
}
