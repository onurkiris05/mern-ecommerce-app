import styled, { css } from "styled-components";

const baseButtonStyles = css<{ size?: string; padding?: string }>`
  font-size: ${({ size }) => size || "2rem"};
  padding: ${({ padding }) => padding || "0.5rem 1rem"};
  border: none;
  border-radius: 1rem;
  background: none;
  color: var(--clr-1);
  cursor: pointer;
  transition: 0.2s;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const Primary = styled.button<{ size?: string; padding?: string }>`
  ${baseButtonStyles}

  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.4);

  &:hover {
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.4);
  }

  &:active {
    box-shadow: inset 0 0.5rem 1rem rgba(0, 0, 0, 0.4);
  }
`;

export const Secondary = styled.button<{ size?: string; color?: string; padding?: string }>`
  ${baseButtonStyles}

  color: #fff;
  background: ${({ color }) => color || "royalblue"};
  box-shadow: 0 0.5rem 0.5rem rgba(0, 0, 0, 0.4);

  &:hover {
    box-shadow: 0 0.75rem 0.75rem rgba(0, 0, 0, 0.5);
  }
`;

export const Icon = styled.button<{ size?: string; color?: string; padding?: string }>`
  ${baseButtonStyles}

  color: ${({ color }) => color || "royalblue"};
  background-color: white;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ size }) => `calc(${size || "2rem"} * 1.5)`};
  height: ${({ size }) => `calc(${size || "2rem"} * 1.5)`};
  transition: 0.2s;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);

  &:active {
    box-shadow: inset 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
  }

  &:hover {
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.5);
  }
`;

export const Status = styled.button<{
  status: "approved" | "declined" | "pending";
  size?: string;
  color?: string;
  padding?: string;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${({ size }) => size || "2rem"};
  padding: ${({ padding }) => padding || "0 0.5rem"};
  border: none;
  border-radius: 0.5rem;
  background-color: ${({ status: statusType }) =>
    statusType === "approved" ? "#e5faf2" : statusType === "declined" ? "#fff0f1" : "#ebf1fe"};
  color: ${({ color, status: statusType }) =>
    color ||
    (statusType === "approved" ? "#3bb077" : statusType === "declined" ? "#d95087" : "#2a7ade")};
`;
