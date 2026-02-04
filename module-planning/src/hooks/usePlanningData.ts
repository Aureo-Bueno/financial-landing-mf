import { useMemo, useState } from "react";
import { defaultData } from "../context/planning-defaults";
import type { BudgetItem, PlanningData } from "../context/planning-types";

const currencyFormatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

const currencyFormatterNoCents = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
  maximumFractionDigits: 0,
});

const getBudgetSpent = (budget: BudgetItem) => {
  if (budget.items && budget.items.length) {
    return budget.items.reduce((total, item) => total + item.amount, 0);
  }
  return budget.spent;
};

const buildActionSuggestions = (budgets: BudgetItem[]) => {
  const exceeded = budgets.filter(
    (budget) => getBudgetSpent(budget) > budget.limit,
  );
  if (!exceeded.length) {
    return [
      "Manter revisão semanal dos gastos.",
      "Separar parte da renda para a reserva.",
    ];
  }

  return exceeded.map(
    (budget) => `Rever gastos de ${budget.category} e definir um teto semanal.`,
  );
};

const buildGoals = (balance: number) => {
  const savingsTarget = Math.max(0, Math.round(balance * 0.1));
  const goals = [
    `Guardar ${currencyFormatterNoCents.format(savingsTarget)} para reserva.`,
  ];

  if (balance < 500) {
    goals.push("Reduzir delivery em 20%.");
    goals.push("Manter limite do cartão abaixo de R$ 1.000.");
  }

  return goals;
};

export const usePlanningData = (data: PlanningData) => {
  const [selectedMonth, setSelectedMonth] = useState(
    () => data.months[0]?.month ?? "",
  );

  const months = data.months.length ? data.months : defaultData.months;
  const fallbackMonth = defaultData.months[0]!;
  const selectedMonthValue =
    months.find((month) => month.month === selectedMonth)?.month ??
    months[0]?.month ??
    "";

  const currentMonth = useMemo(
    () =>
      months.find((month) => month.month === selectedMonthValue) ??
      months[0] ??
      fallbackMonth,
    [months, selectedMonthValue, fallbackMonth],
  );

  const annualSummary = useMemo(
    () =>
      months.reduce(
        (acc, month) => ({
          income: acc.income + month.summary.income,
          fixedExpenses: acc.fixedExpenses + month.summary.fixedExpenses,
          variableExpenses:
            acc.variableExpenses + month.summary.variableExpenses,
          balance: acc.balance + month.summary.balance,
        }),
        { income: 0, fixedExpenses: 0, variableExpenses: 0, balance: 0 },
      ),
    [months],
  );

  const actionSuggestions = useMemo(
    () => buildActionSuggestions(currentMonth.budgets),
    [currentMonth.budgets],
  );

  const goalSuggestions = useMemo(
    () => buildGoals(currentMonth.summary.balance),
    [currentMonth.summary.balance],
  );

  const formatCurrency = (value: number) => currencyFormatter.format(value);

  return {
    selectedMonth,
    setSelectedMonth,
    selectedMonthValue,
    months,
    currentMonth,
    annualSummary,
    actionSuggestions,
    goalSuggestions,
    formatCurrency,
    getBudgetSpent,
  };
};
