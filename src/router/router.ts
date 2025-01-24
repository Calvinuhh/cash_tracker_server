import { Router } from "express";
import budgetRouter from "./routes/budgetRouter";
import expensesRouter from "./routes/expensesRouter";

const router: Router = Router();

router.use("/budgets", budgetRouter);
router.use("/expenses", expensesRouter);

export default router;
