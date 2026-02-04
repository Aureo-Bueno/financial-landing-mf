import React from "react";
import type { MonthlyPlanning } from "../../context/planning-types";
import type { BudgetFormItem, FormState } from "../planning-page/types";
import {
  CheckboxRow,
  ErrorText,
  Field,
  FieldGrid,
  FormDivider,
  Input,
  ModalActions,
  ModalCard,
  ModalHeader,
  ModalOverlay,
  ModalTitle,
  PrimaryButton,
  SecondaryButton,
  Select,
  SmallButton,
} from "./styles";

type PlanningModalProps = {
  isOpen: boolean;
  formState: FormState;
  months: MonthlyPlanning[];
  computedBalance: number;
  formError: string;
  onClose: () => void;
  onSave: () => void;
  onAddBudgetRow: () => void;
  onUpdateBudgetField: (
    index: number,
    key: keyof BudgetFormItem,
    value: string,
  ) => void;
  onFormStateChange: React.Dispatch<React.SetStateAction<FormState>>;
};

export function PlanningModal({
  isOpen,
  formState,
  months,
  computedBalance,
  formError,
  onClose,
  onSave,
  onAddBudgetRow,
  onUpdateBudgetField,
  onFormStateChange,
}: PlanningModalProps) {
  if (!isOpen) return null;

  return (
    <ModalOverlay>
      <ModalCard>
        <ModalHeader>
          <ModalTitle>Adicionar / editar mês</ModalTitle>
          <SecondaryButton type="button" onClick={onClose}>
            Fechar
          </SecondaryButton>
        </ModalHeader>

        <FieldGrid>
          <Field>
            Mês
            <Select
              value={formState.monthMode}
              onChange={(event) =>
                onFormStateChange((prev) => ({
                  ...prev,
                  monthMode: event.target.value as FormState["monthMode"],
                }))
              }
            >
              <option value="existing">Selecionar existente</option>
              <option value="new">Novo mês</option>
            </Select>
          </Field>
          {formState.monthMode === "existing" ? (
            <Field>
              Mês disponível
              <Select
                value={formState.month}
                onChange={(event) =>
                  onFormStateChange((prev) => ({
                    ...prev,
                    month: event.target.value,
                  }))
                }
              >
                {months.map((month) => (
                  <option key={month.month} value={month.month}>
                    {month.month}
                  </option>
                ))}
              </Select>
            </Field>
          ) : (
            <Field>
              Novo mês (AAAA-MM)
              <Input
                value={formState.newMonth}
                onChange={(event) =>
                  onFormStateChange((prev) => ({
                    ...prev,
                    newMonth: event.target.value,
                  }))
                }
              />
            </Field>
          )}
        </FieldGrid>

        <FieldGrid>
          <Field>
            Receita mensal
            <Input
              type="number"
              value={formState.income}
              onChange={(event) =>
                onFormStateChange((prev) => ({
                  ...prev,
                  income: event.target.value,
                }))
              }
            />
          </Field>
          <Field>
            Despesas fixas
            <Input
              type="number"
              value={formState.fixedExpenses}
              onChange={(event) =>
                onFormStateChange((prev) => ({
                  ...prev,
                  fixedExpenses: event.target.value,
                }))
              }
            />
          </Field>
          <Field>
            Despesas variáveis
            <Input
              type="number"
              value={formState.variableExpenses}
              onChange={(event) =>
                onFormStateChange((prev) => ({
                  ...prev,
                  variableExpenses: event.target.value,
                }))
              }
            />
          </Field>
          <Field>
            Saldo previsto
            <Input
              type="number"
              value={
                formState.autoBalance
                  ? String(computedBalance)
                  : formState.balance
              }
              onChange={(event) =>
                onFormStateChange((prev) => ({
                  ...prev,
                  balance: event.target.value,
                }))
              }
              disabled={formState.autoBalance}
            />
          </Field>
        </FieldGrid>

        <CheckboxRow>
          <input
            type="checkbox"
            checked={formState.autoBalance}
            onChange={(event) =>
              onFormStateChange((prev) => ({
                ...prev,
                autoBalance: event.target.checked,
              }))
            }
          />
          Calcular saldo automaticamente
        </CheckboxRow>

        <FormDivider />

        <ModalTitle>Orçamento por categoria</ModalTitle>
        {formState.budgets.map((budget, index) => (
          <FieldGrid key={`${budget.category}-${index}`}>
            <Field>
              Categoria
              <Input
                value={budget.category}
                onChange={(event) =>
                  onUpdateBudgetField(index, "category", event.target.value)
                }
              />
            </Field>
            <Field>
              Gasto
              <Input
                type="number"
                value={budget.spent}
                onChange={(event) =>
                  onUpdateBudgetField(index, "spent", event.target.value)
                }
              />
            </Field>
            <Field>
              Limite
              <Input
                type="number"
                value={budget.limit}
                onChange={(event) =>
                  onUpdateBudgetField(index, "limit", event.target.value)
                }
              />
            </Field>
          </FieldGrid>
        ))}
        <SmallButton type="button" onClick={onAddBudgetRow}>
          + Adicionar categoria (ex.: IPVA)
        </SmallButton>

        {formError ? <ErrorText>{formError}</ErrorText> : null}

        <ModalActions>
          <SecondaryButton type="button" onClick={onClose}>
            Cancelar
          </SecondaryButton>
          <PrimaryButton type="button" onClick={onSave}>
            Salvar
          </PrimaryButton>
        </ModalActions>
      </ModalCard>
    </ModalOverlay>
  );
}
