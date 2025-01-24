import { Router } from "express";

import {
  createExpenseController,
  getAllExpensesController,
  getExpenseByIdController,
  UpdateExpenseController,
  deleteExpenseController,
} from "../../controllers/expensesController";

const expensesRouter: Router = Router();

expensesRouter.post("/", createExpenseController);
expensesRouter.get("/", getAllExpensesController);
expensesRouter.get("/:id", getExpenseByIdController);
expensesRouter.put("/:id", UpdateExpenseController);
expensesRouter.delete("/:id", deleteExpenseController);

export default expensesRouter;
