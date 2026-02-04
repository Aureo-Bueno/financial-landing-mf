import styled from "styled-components";

export const PageShell = styled.div`
  background: ${({ theme }) => theme.colors.bg};
  min-height: 100vh;
`;

export const Content = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: 32px 24px 80px;
  display: grid;
  gap: 32px;
`;

export const Section = styled.section`
  background: ${({ theme }) => theme.colors.bgAlt};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: 28px;
  box-shadow: ${({ theme }) => theme.shadows.sm};
`;

export const Loading = styled.div`
  padding: 24px;
  border-radius: ${({ theme }) => theme.radii.md};
  background: ${({ theme }) => theme.colors.primaryLight};
  color: ${({ theme }) => theme.colors.primaryDark};
  font-weight: 600;
`;

export const BackButton = styled.button`
  margin-top: 16px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.bgAlt};
  color: ${({ theme }) => theme.colors.text};
  border-radius: ${({ theme }) => theme.radii.pill};
  padding: 10px 16px;
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
