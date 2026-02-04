import { useContext } from "react";
import { PlanningContext } from "./planning-context-base";

export const usePlanning = () => {
  const context = useContext(PlanningContext);
  if (!context) {
    throw new Error("usePlanning must be used within PlanningProvider");
  }
  return context;
};
