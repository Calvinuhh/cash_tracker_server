import { Request, Response, NextFunction } from "express";

export const validateBudgetId = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { budgetId } = req.params;

    if (isNaN(parseInt(budgetId)))
      throw Error("El ID del presupuesto debe ser un número");

    next();
  } catch (error) {
    const err = error as Error;
    res.status(400).json(err.message);
  }
};

export const validateExpenseId = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { expenseId } = req.params;

    if (isNaN(parseInt(expenseId)))
      throw Error("El ID del gasto debe ser un número");

    next();
  } catch (error) {
    const err = error as Error;
    res.status(400).json(err.message);
  }
};
