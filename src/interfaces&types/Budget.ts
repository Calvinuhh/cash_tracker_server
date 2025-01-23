export default interface BudgetModel {
  id: number;
  name: string;
  amount: number;
  createdAt: Date;
  updatedAt: Date;
}

export type IBudget = Omit<BudgetModel, "createdAt" | "updatedAt">;

export type CreateBudget = Omit<IBudget, "id">;

export type UpdateBudgetBody = Pick<IBudget, "name" | "amount">;
