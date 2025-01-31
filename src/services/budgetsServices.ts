import Budget from "../models/Budget";
import Expense from "../models/Expense";
import { CreateBudget, UpdateBudgetType } from "../interfaces&types/Budget";

export const createBudget = async (data: CreateBudget) => {
  const { amount, name } = data;

  await Budget.create({
    amount,
    name,
  });
};

export const getAllBudgets = async () => {
  const budgets = await Budget.findAll({
    order: [["createdAt", "DESC"]],
    //TODO: filtrar por el usuario autenticado
  });

  if (budgets.length === 0) throw Error("No hay presupuestos");

  return budgets;
};

export const getBudgetById = async (id: number) => {
  const budget = await Budget.findByPk(id, {
    include: [Expense],
  });

  if (!budget) throw Error("Presupuesto no encontrado");

  return budget;
};

export const UpdateBudget = async (data: UpdateBudgetType) => {
  const { id, amount, name } = data;

  const budget = await Budget.findByPk(id);

  if (!budget) throw Error("Presupuesto no encontrado");

  await budget.update({
    amount,
    name,
  });
};

export const deleteBudget = async (id: number) => {
  const budget = await Budget.findByPk(id);

  if (!budget) throw Error("Presupuesto no encontrado");

  await budget.destroy();
};
