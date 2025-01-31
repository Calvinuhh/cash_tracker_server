import { Request, Response } from "express";

import {
  createBudget,
  getAllBudgets,
  getBudgetById,
  UpdateBudget,
  deleteBudget,
} from "../services/budgetsServices";

export const createBudgetController = async (req: Request, res: Response) => {
  try {
    const { name, amount } = req.body;

    await createBudget({ name, amount });
    res.status(201).json("Presupuesto creado correctamente");
  } catch (error) {
    const err = error as Error;
    res.status(400).json(err.message);
  }
};

export const getAllBudgetsController = async (req: Request, res: Response) => {
  try {
    const budgets = await getAllBudgets();

    res.status(200).json(budgets);
  } catch (error) {
    const err = error as Error;
    res.status(404).json(err.message);
  }
};

export const getBudgetByIdController = async (req: Request, res: Response) => {
  try {
    const { budgetId } = req.params as { budgetId: string };

    const budget = await getBudgetById(parseInt(budgetId));

    res.status(200).json(budget);
  } catch (error) {
    const err = error as Error;
    res.status(404).json(err.message);
  }
};

export const updateBudgetController = async (req: Request, res: Response) => {
  try {
    const { budgetId } = req.params;
    const { name, amount } = req.body;

    await UpdateBudget({
      id: Number(budgetId),
      name,
      amount,
    });

    res.status(200).json("Presupuesto actualizado");
  } catch (error) {
    const err = error as Error;
    res.status(400).json(err.message);
  }
};

export const deleteBudgetController = async (req: Request, res: Response) => {
  try {
    const { budgetId } = req.params;

    await deleteBudget(Number(budgetId));

    res.status(200).json("Presupuesto eliminado");
  } catch (error) {
    const err = error as Error;
    res.status(400).json(err.message);
  }
};
