export type PlanningSummary = {
  income: number;
  fixedExpenses: number;
  variableExpenses: number;
  balance: number;
};

export type BudgetItem = {
  category: string;
  spent: number;
  limit: number;
  items?: BudgetItemEntry[];
};

export type BudgetItemEntry = {
  label: string;
  amount: number;
};

export type MonthlyPlanning = {
  month: string;
  summary: PlanningSummary;
  budgets: BudgetItem[];
};

export type PlanningData = {
  months: MonthlyPlanning[];
};
