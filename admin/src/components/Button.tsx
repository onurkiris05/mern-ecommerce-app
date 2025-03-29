import { ReactNode, ButtonHTMLAttributes } from "react";
import * as StyledButton from "./Button.styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  size?: string;
  padding?: string;
  color?: string;
}

interface StatusButtonProps extends ButtonProps {
  status: "approved" | "declined" | "pending";
}

export const Button = {
  Primary: ({ children, size, padding, ...props }: ButtonProps) => (
    <StyledButton.Primary size={size} padding={padding} {...props}>
      {children}
    </StyledButton.Primary>
  ),
  Secondary: ({ children, size, color, padding, ...props }: ButtonProps) => (
    <StyledButton.Secondary size={size} padding={padding} color={color} {...props}>
      {children}
    </StyledButton.Secondary>
  ),
  Icon: ({ children, size, color, padding, ...props }: ButtonProps) => (
    <StyledButton.Icon size={size} padding={padding} color={color} {...props}>
      {children}
    </StyledButton.Icon>
  ),
  Status: ({ children, status, size, color, padding, ...props }: StatusButtonProps) => (
    <StyledButton.Status status={status} size={size} color={color} padding={padding} {...props}>
      {children}
    </StyledButton.Status>
  ),
};
