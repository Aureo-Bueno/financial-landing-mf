import styled from "styled-components";

export const PageShell = styled.div`
  background: ${({ theme }) => theme.colors.bg};
  min-height: 100vh;
`;

export const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: 10;
  background: ${({ theme }) => theme.colors.bgAlt};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const HeaderInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px 24px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 16px;
  justify-content: space-between;
`;

export const Brand = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const Title = styled.h1`
  margin: 0;
  font-size: 1.6rem;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.colors.text};
`;

export const Subtitle = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 0.95rem;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

export const NavLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 16px;
  border-radius: ${({ theme }) => theme.radii.pill};
  border: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.text};
  background: ${({ theme }) => theme.colors.bgAlt};
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.2s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
    background: ${({ theme }) => theme.colors.primaryLight};
  }
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
