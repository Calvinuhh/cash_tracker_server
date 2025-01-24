import { Router } from "express";
import {
  createBudgetController,
  getAllBudgetsController,
  getBudgetByIdController,
  updateBudgetController,
  deleteBudgetController,
} from "../../controllers/budgetsController";

import { BudgetValidationInputs } from "../../middlewares/inputsValidations";
import { validateBudgetId } from "../../middlewares/paramsValidations";

const budgetRouter: Router = Router();

budgetRouter.param("id", validateBudgetId);

budgetRouter.post("/", BudgetValidationInputs, createBudgetController);
budgetRouter.get("/", getAllBudgetsController);
budgetRouter.get("/:id", getBudgetByIdController);
budgetRouter.put("/:id", BudgetValidationInputs, updateBudgetController);
budgetRouter.delete("/:id", deleteBudgetController);

export default budgetRouter;
