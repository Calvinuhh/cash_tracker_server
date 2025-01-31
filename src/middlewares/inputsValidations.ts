import { Request, Response, NextFunction } from "express";
import {
  validateLengthFromTo,
  validateAmount,
  validateAmountRange,
} from "../utils/validations";

export const BudgetValidationInputs = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name, amount } = req.body;

    if (!name) throw Error("El campo name es requerido");
    if (!amount) throw Error("El campo amount es requerido");

    validateLengthFromTo(name, 2, 100, "name");
    validateAmount(amount);
    validateAmountRange(amount);

    next();
  } catch (error) {
    const err = error as Error;
    res.status(400).json(err.message);
  }
};

export const expenseValidationInputs = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name, amount } = req.body;

    if (!name) throw Error("El campo name es requerido");
    if (!amount) throw Error("El campo amount es requerido");

    validateLengthFromTo(name, 2, 100, "name");
    validateAmount(amount);
    validateAmountRange(amount);

    next();
  } catch (error) {
    const err = error as Error;
    res.status(400).json(err.message);
  }
};
