import { ReactNode, ButtonHTMLAttributes } from "react";
import * as StyledButton from "./Button.styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  size?: string;
  padding?: string;
}

export const Button = {
  Primary: ({ children, size, padding, ...props }: ButtonProps) => (
    <StyledButton.Primary size={size} padding={padding} {...props}>
      {children}
    </StyledButton.Primary>
  ),
  Secondary: ({ children, size, padding, ...props }: ButtonProps) => (
    <StyledButton.Secondary size={size} padding={padding} {...props}>
      {children}
    </StyledButton.Secondary>
  ),
  Icon: ({ children, size, padding, ...props }: ButtonProps) => (
    <StyledButton.Icon size={size} padding={padding} {...props}>
      {children}
    </StyledButton.Icon>
  ),
};
