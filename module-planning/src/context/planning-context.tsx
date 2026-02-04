import React, { useCallback, useEffect, useMemo, useState } from "react";
import type { PlanningData } from "./planning-types";
import { defaultData } from "./planning-defaults";
import { PlanningContext } from "./planning-context-base";

export type {
  PlanningSummary,
  BudgetItem,
  PlanningData,
} from "./planning-types";

const STORAGE_KEY = "financial-planning-data";

const loadStoredData = () => {
  if (typeof window === "undefined") {
    return defaultData;
  }

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultData;
    const parsed = JSON.parse(raw) as PlanningData;
    if (!parsed?.months || !Array.isArray(parsed.months)) {
      return defaultData;
    }
    return parsed;
  } catch {
    return defaultData;
  }
};

export const PlanningProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [data, setData] = useState<PlanningData>(loadStoredData);

  const importFromJson = useCallback((input: PlanningData) => {
    setData(input);
  }, []);

  const value = useMemo(
    () => ({ data, importFromJson }),
    [data, importFromJson],
  );

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch {
      // ignore write errors (storage disabled or full)
    }
  }, [data]);

  return (
    <PlanningContext.Provider value={value}>
      {children}
    </PlanningContext.Provider>
  );
};
