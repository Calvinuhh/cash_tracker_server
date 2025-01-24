import { Request, Response } from "express";

import {
  createExpense,
  getAllExpenses,
  getExpenseById,
  updateExpense,
  deleteExpense,
} from "../services/expensesServices";

export const createExpenseController = (req: Request, res: Response) => {
  try {
  } catch (error) {
    const err = error as Error;
    res.status(400).json(err.message);
  }
};

export const getAllExpensesController = (req: Request, res: Response) => {
  try {
  } catch (error) {
    const err = error as Error;
    res.status(404).json(err.message);
  }
};

export const getExpenseByIdController = (req: Request, res: Response) => {
  try {
  } catch (error) {
    const err = error as Error;
    res.status(404).json(err.message);
  }
};

export const UpdateExpenseController = (req: Request, res: Response) => {
  try {
  } catch (error) {
    const err = error as Error;
    res.status(400).json(err.message);
  }
};

export const deleteExpenseController = (req: Request, res: Response) => {
  try {
  } catch (error) {
    const err = error as Error;
    res.status(404).json(err.message);
  }
};
