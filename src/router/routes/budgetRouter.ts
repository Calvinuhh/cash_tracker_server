import { Router } from "express";
//Budgets Controllers
import {
  createBudgetController,
  getAllBudgetsController,
  getBudgetByIdController,
  updateBudgetController,
  deleteBudgetController,
} from "../../controllers/budgetsController";

//Expenses Controllers
import {
  createExpenseController,
  deleteExpenseController,
  getAllExpensesController,
  getExpenseByIdController,
  UpdateExpenseController,
} from "../../controllers/expensesController";

import {
  BudgetValidationInputs,
  expenseValidationInputs,
} from "../../middlewares/inputsValidations";

import {
  validateBudgetId,
  validateExpenseId,
} from "../../middlewares/paramsValidations";

const budgetRouter: Router = Router();

budgetRouter.param("budgetId", validateBudgetId);
budgetRouter.param("expenseId", validateExpenseId);

//Budgets
budgetRouter.post("/", BudgetValidationInputs, createBudgetController);
budgetRouter.get("/", getAllBudgetsController);
budgetRouter.get("/:budgetId", getBudgetByIdController);
budgetRouter.put("/:budgetId", BudgetValidationInputs, updateBudgetController);
budgetRouter.delete("/:budgetId", deleteBudgetController);

//Expenses
budgetRouter.post(
  "/:budgetId/expenses",
  expenseValidationInputs,
  createExpenseController
);
budgetRouter.get("/:budgetId/expenses", getAllExpensesController);
budgetRouter.get("/:budgetId/expenses/:expenseId", getExpenseByIdController);
budgetRouter.put("/:budgetId/expenses/:expenseId", UpdateExpenseController);
budgetRouter.delete("/:budgetId/expenses/:expenseId", deleteExpenseController);

export default budgetRouter;
