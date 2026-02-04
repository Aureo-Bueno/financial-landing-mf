import { useState } from "react";
import type { PlanningData, MonthlyPlanning } from "../context/planning-types";
import type { BudgetFormItem, FormState } from "../components/planning-page/types";

type UsePlanningFormParams = {
  data: PlanningData;
  currentMonth: MonthlyPlanning;
  onSaveMonth: (next: PlanningData, selectedMonth: string) => void;
};

export const usePlanningForm = ({
  data,
  currentMonth,
  onSaveMonth,
}: UsePlanningFormParams) => {
  const [formError, setFormError] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [formState, setFormState] = useState<FormState>(() => ({
    monthMode: "existing",
    month: currentMonth.month,
    newMonth: "",
    income: String(currentMonth.summary.income),
    fixedExpenses: String(currentMonth.summary.fixedExpenses),
    variableExpenses: String(currentMonth.summary.variableExpenses),
    balance: String(currentMonth.summary.balance),
    autoBalance: true,
    budgets: currentMonth.budgets.map((budget) => ({
      category: budget.category,
      spent: String(budget.spent),
      limit: String(budget.limit),
    })),
  }));

  const openModal = () => {
    setFormState({
      monthMode: "existing",
      month: currentMonth.month,
      newMonth: "",
      income: String(currentMonth.summary.income),
      fixedExpenses: String(currentMonth.summary.fixedExpenses),
      variableExpenses: String(currentMonth.summary.variableExpenses),
      balance: String(currentMonth.summary.balance),
      autoBalance: true,
      budgets: currentMonth.budgets.map((budget) => ({
        category: budget.category,
        spent: String(budget.spent),
        limit: String(budget.limit),
      })),
    });
    setFormError("");
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setFormError("");
  };

  const parseNumber = (value: string) => {
    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : 0;
  };

  const computedBalance =
    parseNumber(formState.income) -
    parseNumber(formState.fixedExpenses) -
    parseNumber(formState.variableExpenses);

  const handleSave = () => {
    const resolvedMonth =
      formState.monthMode === "new"
        ? formState.newMonth.trim()
        : formState.month;

    if (!resolvedMonth) {
      setFormError("Informe o mês (ex.: 2026-01).");
      return;
    }

    const budgets = formState.budgets
      .map((budget) => ({
        category: budget.category.trim(),
        spent: parseNumber(budget.spent),
        limit: parseNumber(budget.limit),
      }))
      .filter((budget) => budget.category !== "");

    const monthData = {
      month: resolvedMonth,
      summary: {
        income: parseNumber(formState.income),
        fixedExpenses: parseNumber(formState.fixedExpenses),
        variableExpenses: parseNumber(formState.variableExpenses),
        balance: formState.autoBalance
          ? computedBalance
          : parseNumber(formState.balance),
      },
      budgets,
    };

    const existingIndex = data.months.findIndex(
      (month) => month.month === resolvedMonth,
    );
    const nextMonths =
      existingIndex >= 0
        ? data.months.map((month, index) =>
            index === existingIndex ? monthData : month,
          )
        : [...data.months, monthData];

    onSaveMonth({ months: nextMonths }, resolvedMonth);
    closeModal();
  };

  const updateBudgetField = (
    index: number,
    key: keyof BudgetFormItem,
    value: string,
  ) => {
    setFormState((prev) => ({
      ...prev,
      budgets: prev.budgets.map((budget, idx) =>
        idx === index ? { ...budget, [key]: value } : budget,
      ),
    }));
  };

  const addBudgetRow = () => {
    setFormState((prev) => ({
      ...prev,
      budgets: [...prev.budgets, { category: "", spent: "", limit: "" }],
    }));
  };

  return {
    formState,
    setFormState,
    formError,
    isModalOpen,
    openModal,
    closeModal,
    computedBalance,
    handleSave,
    updateBudgetField,
    addBudgetRow,
  };
};
