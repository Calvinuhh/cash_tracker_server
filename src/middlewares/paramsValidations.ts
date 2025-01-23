import { Request, Response, NextFunction } from "express";

export const validateBudgetById = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;

    if (isNaN(parseInt(id))) throw Error("El ID debe ser un número");

    next();
  } catch (error) {
    const err = error as Error;
    res.status(400).json(err.message);
  }
};
