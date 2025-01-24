export default interface ExpenseModel {
  id: number;
  name: string;
  amount: string;
  createdAt: Date;
  updatedAt: Date;
  budget_id: number;
}
