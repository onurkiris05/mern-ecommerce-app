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

export const Secondary = styled.button<{ size?: string; padding?: string }>`
  ${baseButtonStyles}

  color: #fff;
  background: var(--clr-2);

  &:hover {
    background-color: var(--clr-3);
  }
`;

export const Icon = styled.button<{ size?: string; color?: string; padding?: string }>`
  ${baseButtonStyles}

  color: ${({ color }) => color || "var(--clr-1)"};
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
    box-shadow: inset 0 1rem 2rem rgba(0, 0, 0, 0.2);
  }
`;
