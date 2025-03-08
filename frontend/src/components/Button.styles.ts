import styled, { css } from "styled-components";

const baseButtonStyles = css<{ size?: string; padding?: string }>`
  font-size: ${({ size }) => size || "2rem"};
  padding: ${({ padding }) => padding || "0.5rem 1rem"};
  background: none;
  color: var(--clr-1);
  border-color: var(--clr-1);
  cursor: pointer;
  transition: 0.2s;
`;

export const Primary = styled.button<{ size?: string; padding?: string }>`
  ${baseButtonStyles}

  &:hover {
    background-color: var(--clr-3);
  }
`;

export const Secondary = styled.button<{ size?: string; padding?: string }>`
  ${baseButtonStyles}
  color: #fff;
  border-color: #fff;

  &:hover {
    background-color: var(--clr-5);
  }
`;

export const Icon = styled.button<{ size?: string; padding?: string }>`
  ${baseButtonStyles}

  border: none;
  background-color: white;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ size }) => `calc(${size || "2rem"} * 1.5)`};
  height: ${({ size }) => `calc(${size || "2rem"} * 1.5)`};
  transition: 0.5s;

  &:hover {
    transform: scale(1.1);
    background-color: var(--clr-3);
  }
`;
