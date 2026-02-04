import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  gap: 24px;
  width: 100%;
`;

export const Title = styled.h2`
  margin: 0;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.text};
`;

export const Subtitle = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.textMuted};
`;

export const Header = styled.div`
  display: grid;
  gap: 8px;
`;

export const HeaderActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: center;

  @media (max-width: 720px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const ImportButton = styled.button`
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.bgAlt};
  color: ${({ theme }) => theme.colors.text};
  border-radius: ${({ theme }) => theme.radii.pill};
  padding: 8px 14px;
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
    background: ${({ theme }) => theme.colors.primaryLight};
  }
`;

export const AddButton = styled.button`
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background: ${({ theme }) => theme.colors.primary};
  color: #fff;
  border-radius: ${({ theme }) => theme.radii.pill};
  padding: 8px 14px;
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.primaryDark};
    border-color: ${({ theme }) => theme.colors.primaryDark};
  }
`;

export const ImportHint = styled.span`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 0.85rem;
`;

export const ImportError = styled.span`
  color: ${({ theme }) => theme.colors.danger};
  font-size: 0.85rem;
`;

export const MonthLabel = styled.span`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 0.85rem;
  font-weight: 600;
`;

export const MonthSelect = styled.select`
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.bgAlt};
  color: ${({ theme }) => theme.colors.text};
  border-radius: ${({ theme }) => theme.radii.md};
  padding: 8px 12px;
  font-weight: 600;
  font-size: 0.9rem;
  min-width: 160px;

  @media (max-width: 720px) {
    width: 100%;
  }
`;

export const BalanceBadge = styled.span`
  background: ${({ theme }) => theme.colors.secondaryLight};
  color: ${({ theme }) => theme.colors.secondaryDark};
  border-radius: ${({ theme }) => theme.radii.pill};
  padding: 6px 12px;
  font-weight: 600;
  font-size: 0.85rem;
`;

export const HiddenInput = styled.input`
  display: none;
`;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 16px;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const StatCard = styled.div`
  background: ${({ theme }) => theme.colors.bgAlt};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.md};
  padding: 16px;
  display: grid;
  gap: 6px;
`;

export const StatLabel = styled.span`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 0.85rem;
`;

export const StatValue = styled.span`
  font-size: 1.3rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
`;

export const Layout = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 16px;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const Panel = styled.div`
  background: ${({ theme }) => theme.colors.bgAlt};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: 18px;
  display: grid;
  gap: 12px;
`;

export const PanelTitle = styled.h3`
  margin: 0;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text};
`;

export const CodeBlock = styled.pre`
  margin: 0;
  padding: 14px;
  border-radius: ${({ theme }) => theme.radii.md};
  background: ${({ theme }) => theme.colors.primaryLight};
  color: ${({ theme }) => theme.colors.text};
  border: 1px solid ${({ theme }) => theme.colors.border};
  font-size: 0.85rem;
  line-height: 1.5;
  overflow-x: auto;
`;

export const BudgetRow = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 8px;
  align-items: center;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 4px;
  }
`;

export const BudgetLabel = styled.span`
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.95rem;
`;

export const BudgetValue = styled.span`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 0.9rem;
`;

export const BudgetItems = styled.ul`
  margin: 0;
  padding-left: 0;
  list-style: none;
  display: grid;
  gap: 6px;
`;

export const BudgetItemRow = styled.li`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 8px;
  align-items: center;
  padding: 6px 10px;
  border-radius: ${({ theme }) => theme.radii.md};
  background: ${({ theme }) => theme.colors.primaryLight};

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 4px;
  }
`;

export const BudgetItemLabel = styled.span`
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.9rem;
`;

export const BudgetItemValue = styled.span`
  color: ${({ theme }) => theme.colors.primaryDark};
  font-weight: 600;
  font-size: 0.9rem;
`;

export const ProgressBar = styled.div<{ $value: number; $tone?: "ok" | "warn" }>`
  height: 10px;
  background: ${({ theme }) => theme.colors.primaryLight};
  border-radius: ${({ theme }) => theme.radii.pill};
  overflow: hidden;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    width: ${({ $value }) => Math.min($value, 100)}%;
    background: ${({ theme, $tone }) =>
      $tone === "warn" ? theme.colors.warning : theme.colors.success};
    border-radius: ${({ theme }) => theme.radii.pill};
  }
`;

export const GoalList = styled.ul`
  margin: 0;
  padding-left: 18px;
  color: ${({ theme }) => theme.colors.text};
  display: grid;
  gap: 6px;
`;

export const Hint = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 0.9rem;
`;
