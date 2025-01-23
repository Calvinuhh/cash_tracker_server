import { Request, Response } from "express";

import {
  createBudget,
  getAllBudgets,
  getBudgetById,
  UpdateBudget,
  deleteBudget,
} from "../services/budgetsServices";
import { CreateBudget, UpdateBudgetBody } from "../interfaces&types/Budget";

export const createBudgetController = async (req: Request, res: Response) => {
  try {
    const { name, amount }: CreateBudget = req.body;
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
    const { id } = req.params as { id: string };

    const budget = await getBudgetById(parseInt(id));

    res.status(200).json(budget);
  } catch (error) {
    const err = error as Error;
    res.status(404).json(err.message);
  }
};

export const updateBudgetController = async (req: Request, res: Response) => {
  try {
    const { name, amount }: UpdateBudgetBody = req.body;
    const { id } = req.params;

    const updatedBudget = await UpdateBudget({
      id: Number(id),
      name,
      amount,
    });

    res.status(200).json(updatedBudget);
  } catch (error) {
    const err = error as Error;
    res.status(400).json(err.message);
  }
};

export const deleteBudgetController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    res.status(200).json(await deleteBudget(Number(id)));
  } catch (error) {
    const err = error as Error;
    res.status(400).json(err.message);
  }
};
