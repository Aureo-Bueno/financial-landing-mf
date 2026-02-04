export type BudgetFormItem = {
  category: string;
  spent: string;
  limit: string;
};

export type FormState = {
  monthMode: "existing" | "new";
  month: string;
  newMonth: string;
  income: string;
  fixedExpenses: string;
  variableExpenses: string;
  balance: string;
  autoBalance: boolean;
  budgets: BudgetFormItem[];
};
