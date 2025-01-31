import { Request, Response } from "express";

import {
  createExpense,
  getAllExpenses,
  getExpenseById,
  updateExpense,
  deleteExpense,
} from "../services/expensesServices";

export const createExpenseController = async (req: Request, res: Response) => {
  try {
    const { budgetId } = req.params;
    const { name, amount } = req.body;

    await createExpense({ id: Number(budgetId), name, amount });

    res.status(201).json("Gasto agregado correctamente");
  } catch (error) {
    const err = error as Error;
    res.status(400).json(err.message);
  }
};

export const getAllExpensesController = async (req: Request, res: Response) => {
  try {
    const { budgetId } = req.params;

    const expenses = await getAllExpenses(Number(budgetId));

    res.status(200).json(expenses);
  } catch (error) {
    const err = error as Error;
    res.status(404).json(err.message);
  }
};

export const getExpenseByIdController = async (req: Request, res: Response) => {
  try {
    const { budgetId, expenseId } = req.params;

    const expense = await getExpenseById(Number(budgetId), Number(expenseId));

    res.status(200).json(expense);
  } catch (error) {
    const err = error as Error;
    res.status(404).json(err.message);
  }
};

export const UpdateExpenseController = async (req: Request, res: Response) => {
  try {
    const { budgetId, expenseId } = req.params;
    const { name, amount } = req.body;

    await updateExpense({
      budgetId: Number(budgetId),
      expenseId: Number(expenseId),
      name,
      amount,
    });

    await res.status(200).json("Gasto actualizado");
  } catch (error) {
    const err = error as Error;
    res.status(400).json(err.message);
  }
};

export const deleteExpenseController = async (req: Request, res: Response) => {
  try {
    const { budgetId, expenseId } = req.params;

    await deleteExpense(Number(budgetId), Number(expenseId));

    res.status(200).json("Gasto eliminado");
  } catch (error) {
    const err = error as Error;
    res.status(404).json(err.message);
  }
};
