import styled from "styled-components";

export const FooterWrapper = styled.footer`
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.bgAlt};
  padding: 20px 24px;
`;

export const FooterInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: 10px 16px;
  align-items: center;
  justify-content: space-between;
`;

export const FooterText = styled.span`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 0.9rem;
`;

export const FooterHighlight = styled.span`
  color: ${({ theme }) => theme.colors.text};
  font-weight: 600;
`;
