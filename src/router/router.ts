import { Router } from "express";
import budgetRouter from "./routes/budgetRouter";

const router: Router = Router();

router.use("/budgets", budgetRouter);

export default router;
