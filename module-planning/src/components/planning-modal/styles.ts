import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(15, 23, 42, 0.55);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  z-index: 50;

  @media (max-width: 640px) {
    align-items: flex-start;
    padding: 16px;
  }
`;

export const ModalCard = styled.div`
  width: min(720px, 100%);
  max-height: min(90vh, 860px);
  background: ${({ theme }) => theme.colors.bgAlt};
  border-radius: ${({ theme }) => theme.radii.lg};
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: ${({ theme }) => theme.shadows.md};
  padding: 24px;
  display: grid;
  gap: 16px;
  overflow-y: auto;

  @media (max-width: 640px) {
    padding: 16px;
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`;

export const ModalTitle = styled.h3`
  margin: 0;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.text};
`;

export const ModalActions = styled.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
  flex-wrap: wrap;

  @media (max-width: 640px) {
    width: 100%;
    justify-content: stretch;

    button {
      flex: 1 1 140px;
    }
  }
`;

export const FieldGrid = styled.div`
  display: grid;
  gap: 12px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const Field = styled.label`
  display: grid;
  gap: 6px;
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.9rem;
`;

export const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.md};
  padding: 8px 10px;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.text};
  background: ${({ theme }) => theme.colors.bgAlt};
`;

export const Select = styled.select`
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.md};
  padding: 8px 10px;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.text};
  background: ${({ theme }) => theme.colors.bgAlt};
`;

export const CheckboxRow = styled.label`
  display: flex;
  gap: 8px;
  align-items: center;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.text};
`;

export const FormDivider = styled.div`
  height: 1px;
  background: ${({ theme }) => theme.colors.border};
`;

export const SmallButton = styled.button`
  border: 1px dashed ${({ theme }) => theme.colors.border};
  background: transparent;
  color: ${({ theme }) => theme.colors.text};
  border-radius: ${({ theme }) => theme.radii.md};
  padding: 6px 10px;
  font-size: 0.85rem;
  cursor: pointer;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const ErrorText = styled.span`
  color: ${({ theme }) => theme.colors.danger};
  font-size: 0.85rem;
`;

export const SecondaryButton = styled.button`
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

export const PrimaryButton = styled.button`
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
