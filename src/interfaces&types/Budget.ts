export default interface BudgetModel {
  id: number;
  name: string;
  amount: number;
  createdAt: Date;
  updatedAt: Date;
}

export type CreateBudget = Pick<BudgetModel, "name" | "amount">;

export type UpdateBudgetType = Omit<BudgetModel, "createdAt" | "updatedAt">;
