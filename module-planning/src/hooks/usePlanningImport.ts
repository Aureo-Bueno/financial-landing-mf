import { useRef, useState } from "react";
import type { ChangeEvent } from "react";
import type { PlanningData } from "../context/planning-types";

type UsePlanningImportParams = {
  importFromJson: (input: PlanningData) => void;
  onImported?: (input: PlanningData) => void;
};

export const usePlanningImport = ({
  importFromJson,
  onImported,
}: UsePlanningImportParams) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [importError, setImportError] = useState("");

  const handleImportClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    event.target.value = "";
    if (!file) return;

    try {
      const text = await file.text();
      const parsed = JSON.parse(text) as PlanningData;
      importFromJson(parsed);
      setImportError("");
      onImported?.(parsed);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setImportError("Não foi possível ler o JSON. Verifique o arquivo.");
    }
  };

  return {
    fileInputRef,
    importError,
    handleImportClick,
    handleFileChange,
  };
};
