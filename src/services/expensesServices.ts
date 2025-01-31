import Expense from "../models/Expense";
import Budget from "../models/Budget";
import { CreateExpense, UpdateExpenseType } from "../interfaces&types/Expense";

export const createExpense = async (data: CreateExpense) => {
  const { id, name, amount } = data;

  const budget = await Budget.findByPk(id);

  if (!budget) throw Error("Presupuesto no encontrado");

  await Expense.create({ name, amount, budget_id: id });
};

export const getAllExpenses = async (id: number) => {
  const expenses = await Expense.findAll({
    where: { budget_id: id },
    order: [["createdAt", "DESC"]],
  });

  if (expenses.length === 0) throw Error("No se encontraron gastos");

  return expenses;
};

export const getExpenseById = async (budgetId: number, expenseId: number) => {
  const budget = await Budget.findByPk(budgetId);

  if (!budget) throw Error("Presupuesto no encontrado");

  const expense = await Expense.findOne({
    where: { id: expenseId, budget_id: budget.id },
  });

  if (!expense) throw Error("Gasto no encontrado");

  return expense;
};

export const updateExpense = async (data: UpdateExpenseType) => {
  const { budgetId, expenseId, amount, name } = data;

  const budget = await Budget.findByPk(budgetId);

  if (!budget) throw Error("Presupuesto no encontrado");

  const expense = await Expense.findOne({
    where: {
      id: expenseId,
      budget_id: budget.id,
    },
  });

  if (!expense) throw Error("Gasto no encontrado");

  await expense.update({ amount, name });
};

export const deleteExpense = async (budgetId: number, expenseId: number) => {
  const budget = await Budget.findByPk(budgetId);

  if (!budget) throw Error("Presupuesto no encontrado");

  const expense = await Expense.findOne({
    where: {
      id: expenseId,
      budget_id: budget.id,
    },
  });

  if (!expense) throw Error("Gasto no encontrado");

  await expense.destroy();
};
