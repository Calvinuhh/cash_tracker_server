import Budget from "../models/Budget";
import { CreateBudget, IBudget } from "../interfaces&types/Budget";

export const createBudget = async (data: CreateBudget) => {
  const { amount, name } = data;

  const newBudget = await Budget.create({
    amount,
    name,
  });

  return newBudget;
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
  const budget = await Budget.findByPk(id);

  if (!budget) throw Error("Presupuesto no encontrado");

  return budget;
};

export const UpdateBudget = async (data: IBudget) => {
  const { id, amount, name } = data;

  const budget = await Budget.findByPk(id);

  if (!budget) throw Error("Presupuesto no encontrado");

  budget.amount = amount;
  budget.name = name;

  await budget.save();

  return budget;
};

export const deleteBudget = async (id: number) => {
  const budget = await Budget.findByPk(id);

  if (!budget) throw Error("Presupuesto no encontrado");

  await budget.destroy();

  return "Presupuesto eliminado";
};
