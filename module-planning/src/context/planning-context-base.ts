import { createContext } from "react";
import type { PlanningData } from "./planning-types";

export type PlanningContextValue = {
  data: PlanningData;
  importFromJson: (input: PlanningData) => void;
};

export const PlanningContext = createContext<PlanningContextValue | undefined>(
  undefined,
);
