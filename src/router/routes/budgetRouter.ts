import { Router, Request, Response } from "express";
const budgetRouter: Router = Router();

import {
  createBudgetController,
  getAllBudgetsController,
  getBudgetByIdController,
  updateBudgetController,
  deleteBudgetController,
} from "../../controllers/budgetsController";

budgetRouter.post("/", createBudgetController);
budgetRouter.get("/", getAllBudgetsController);
budgetRouter.get("/:id", getBudgetByIdController);
budgetRouter.put("/:id", updateBudgetController);
budgetRouter.delete("/:id", deleteBudgetController);

export default budgetRouter;
