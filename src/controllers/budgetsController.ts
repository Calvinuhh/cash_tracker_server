import { Request, Response } from "express";

export const createBudgetController = async (req: Request, res: Response) => {
  try {
    res.json("POST desde /budgets");
  } catch (error) {
    const err = error as Error;
    res.status(400).send(err.message);
  }
};

export const getAllBudgetsController = async (req: Request, res: Response) => {
  try {
    res.json("GET desde /budgets");
  } catch (error) {
    const err = error as Error;
    res.status(404).send(err.message);
  }
};

export const getBudgetByIdController = async (req: Request, res: Response) => {
  try {
    res.json("GET por id desde /budgets/:id");
  } catch (error) {
    const err = error as Error;
    res.status(404).send(err.message);
  }
};

export const updateBudgetController = async (req: Request, res: Response) => {
  try {
    res.json("PUT desde /budgets/:id");
  } catch (error) {
    const err = error as Error;
    res.status(400).send(err.message);
  }
};

export const deleteBudgetController = async (req: Request, res: Response) => {
  try {
    res.json("DELETE desde /budgets/:id");
  } catch (error) {
    const err = error as Error;
    res.status(400).send(err.message);
  }
};
