import { Router, Request, Response } from "express";
const budgetRouter: Router = Router();

import {
  createBudgetController,
  getAllBudgetsController,
  getBudgetByIdController,
  updateBudgetController,
  deleteBudgetController,
} from "../../controllers/budgetsController";

import { newBudgetValidation } from "../../middlewares/inputsValidations";
import { validateBudgetById } from "../../middlewares/paramsValidations";

budgetRouter.post("/", newBudgetValidation, createBudgetController);
budgetRouter.get("/", getAllBudgetsController);
budgetRouter.get("/:id", validateBudgetById, getBudgetByIdController);
budgetRouter.put(
  "/:id",
  validateBudgetById,
  newBudgetValidation,
  updateBudgetController
);
budgetRouter.delete("/:id", validateBudgetById, deleteBudgetController);

export default budgetRouter;
