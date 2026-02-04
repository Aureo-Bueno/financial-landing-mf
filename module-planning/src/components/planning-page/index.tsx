import React from "react";
import { usePlanning } from "../../context/planning-hooks";
import { defaultData } from "../../context/planning-defaults";
import { PlanningModal } from "../planning-modal";
import { usePlanningData } from "../../hooks/usePlanningData";
import { usePlanningForm } from "../../hooks/usePlanningForm";
import { usePlanningImport } from "../../hooks/usePlanningImport";
import {
  AddButton,
  BalanceBadge,
  BudgetItemLabel,
  BudgetItemRow,
  BudgetItemValue,
  BudgetItems,
  BudgetLabel,
  BudgetRow,
  BudgetValue,
  CodeBlock,
  GoalList,
  Header,
  HeaderActions,
  HiddenInput,
  Hint,
  ImportButton,
  ImportError,
  ImportHint,
  Layout,
  MonthLabel,
  MonthSelect,
  Panel,
  PanelTitle,
  ProgressBar,
  StatCard,
  StatLabel,
  StatValue,
  StatsGrid,
  Subtitle,
  Title,
  Wrapper,
} from "./styles";

export function PlanningPage() {
  const { data, importFromJson } = usePlanning();
  const {
    setSelectedMonth,
    selectedMonthValue,
    months,
    currentMonth,
    annualSummary,
    actionSuggestions,
    goalSuggestions,
    formatCurrency,
    getBudgetSpent,
  } = usePlanningData(data);

  const { fileInputRef, importError, handleImportClick, handleFileChange } =
    usePlanningImport({
      importFromJson,
      onImported: (parsed) => {
        if (parsed.months?.length) {
          setSelectedMonth(parsed.months[0].month);
        }
      },
    });

  const {
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
  } = usePlanningForm({
    data,
    currentMonth,
    onSaveMonth: (nextData, resolvedMonth) => {
      importFromJson(nextData);
      setSelectedMonth(resolvedMonth);
    },
  });

  return (
    <Wrapper>
      <Header>
        <Title>Planejamento financeiro pessoal</Title>
        <Subtitle>
          Controle mensal com visão clara de receitas, despesas e metas.
        </Subtitle>
        <HeaderActions>
          <ImportButton type="button" onClick={handleImportClick}>
            Importar JSON
          </ImportButton>
          <AddButton type="button" onClick={openModal}>
            Adicionar dados
          </AddButton>
          <MonthLabel>Mês</MonthLabel>
          <MonthSelect
            value={selectedMonthValue}
            onChange={(event) => setSelectedMonth(event.target.value)}
          >
            {months.map((month) => (
              <option key={month.month} value={month.month}>
                {month.month}
              </option>
            ))}
          </MonthSelect>
          <BalanceBadge>
            Saldo anual: {formatCurrency(annualSummary.balance)}
          </BalanceBadge>
          <ImportHint>Use um arquivo .json com seus dados por mês.</ImportHint>
          {importError ? <ImportError>{importError}</ImportError> : null}
          <HiddenInput
            ref={fileInputRef}
            type="file"
            accept="application/json"
            onChange={handleFileChange}
          />
        </HeaderActions>
      </Header>

      <StatsGrid>
        <StatCard>
          <StatLabel>Receita mensal</StatLabel>
          <StatValue>{formatCurrency(currentMonth.summary.income)}</StatValue>
        </StatCard>
        <StatCard>
          <StatLabel>Despesas fixas</StatLabel>
          <StatValue>
            {formatCurrency(currentMonth.summary.fixedExpenses)}
          </StatValue>
        </StatCard>
        <StatCard>
          <StatLabel>Despesas variáveis</StatLabel>
          <StatValue>
            {formatCurrency(currentMonth.summary.variableExpenses)}
          </StatValue>
        </StatCard>
        <StatCard>
          <StatLabel>Saldo previsto</StatLabel>
          <StatValue>{formatCurrency(currentMonth.summary.balance)}</StatValue>
        </StatCard>
      </StatsGrid>

      <Layout>
        <Panel>
          <PanelTitle>Orçamento por categoria</PanelTitle>
          {currentMonth.budgets.map((budget) => {
            const spentTotal = getBudgetSpent(budget);
            const percentage =
              budget.limit > 0 ? (spentTotal / budget.limit) * 100 : 0;
            const tone = spentTotal > budget.limit ? "warn" : "ok";
            return (
              <React.Fragment key={budget.category}>
                <BudgetRow>
                  <BudgetLabel>{budget.category}</BudgetLabel>
                  <BudgetValue>
                    {formatCurrency(spentTotal)} /{" "}
                    {formatCurrency(budget.limit)}
                  </BudgetValue>
                </BudgetRow>
                <ProgressBar $value={percentage} $tone={tone} />
                {budget.items?.length ? (
                  <BudgetItems>
                    {budget.items.map((item, index) => (
                      <BudgetItemRow
                        key={`${budget.category}-${item.label}-${index}`}
                      >
                        <BudgetItemLabel>{item.label}</BudgetItemLabel>
                        <BudgetItemValue>
                          {formatCurrency(item.amount)}
                        </BudgetItemValue>
                      </BudgetItemRow>
                    ))}
                  </BudgetItems>
                ) : null}
              </React.Fragment>
            );
          })}
        </Panel>

        <Panel>
          <PanelTitle>Metas do mês</PanelTitle>
          <GoalList>
            {goalSuggestions.map((goal) => (
              <li key={goal}>{goal}</li>
            ))}
          </GoalList>
        </Panel>

        <Panel>
          <PanelTitle>Plano de ação semanal</PanelTitle>
          <GoalList>
            {actionSuggestions.map((action) => (
              <li key={action}>{action}</li>
            ))}
          </GoalList>
          <Hint>
            Ajuste as metas conforme a realidade do mês. O foco é consistência.
          </Hint>
        </Panel>
      </Layout>

      <Panel>
        <PanelTitle>Modelo de JSON</PanelTitle>
        <Hint>
          Use esta estrutura para importar os dados por mês. As ações são
          geradas automaticamente quando uma categoria ultrapassar o limite. As
          metas são calculadas com base no saldo do mês. Você pode adicionar
          novas categorias (ex.: IPVA) e detalhar itens com `items`.
        </Hint>
        <CodeBlock>{JSON.stringify(defaultData, null, 2)}</CodeBlock>
      </Panel>

      {isModalOpen && (
        <PlanningModal
          isOpen={isModalOpen}
          formState={formState}
          months={months}
          computedBalance={computedBalance}
          formError={formError}
          onClose={closeModal}
          onSave={handleSave}
          onAddBudgetRow={addBudgetRow}
          onUpdateBudgetField={updateBudgetField}
          onFormStateChange={setFormState}
        />
      )}
    </Wrapper>
  );
}
