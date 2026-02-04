import type { PlanningData } from "./planning-types";

export const defaultData: PlanningData = {
  months: [
    {
      month: "2026-01",
      summary: {
        income: 0,
        fixedExpenses: 0,
        variableExpenses: 0,
        balance: 0,
      },
      budgets: [
        { category: "Moradia", spent: 0, limit: 0, items: [] },
        { category: "Alimentação", spent: 0, limit: 0, items: [] },
        { category: "Transporte", spent: 0, limit: 0, items: [] },
        { category: "Lazer", spent: 0, limit: 0, items: [] },
      ],
    },
    {
      month: "2026-02",
      summary: {
        income: 0,
        fixedExpenses: 0,
        variableExpenses: 0,
        balance: 0,
      },
      budgets: [
        { category: "Moradia", spent: 0, limit: 0, items: [] },
        { category: "Alimentação", spent: 0, limit: 0, items: [] },
        { category: "Transporte", spent: 0, limit: 0, items: [] },
        { category: "Lazer", spent: 0, limit: 0, items: [] },
      ],
    },
    {
      month: "2026-03",
      summary: {
        income: 0,
        fixedExpenses: 0,
        variableExpenses: 0,
        balance: 0,
      },
      budgets: [
        { category: "Moradia", spent: 0, limit: 0, items: [] },
        { category: "Alimentação", spent: 0, limit: 0, items: [] },
        { category: "Transporte", spent: 0, limit: 0, items: [] },
        { category: "Lazer", spent: 0, limit: 0, items: [] },
      ],
    },
  ],
};
