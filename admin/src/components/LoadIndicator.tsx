import styled, { keyframes } from "styled-components";
import { HourglassBottom } from "@mui/icons-material";

const loadingAnimation = keyframes`
  0% {
    transform: rotate(0deg) 
  }
  50% {
    transform: rotate(180deg) 
  }
  100% {
    transform: rotate(360deg)
  }
`;

const LoaderContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  background: rgba(255, 255, 255, 0.8);
  padding: 1.5rem;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  font-weight: 500;
  font-size: 2rem;
  color: #333;

  svg {
    animation: ${loadingAnimation} 1.2s cubic-bezier(0.19, 1, 0.22, 1) infinite;
    font-size: 5rem;
    color: #007bff;
  }
`;

type LoaderProps = {
  message?: string;
};

function LoadIndicator({ message = "Loading..." }: LoaderProps) {
  return (
    <LoaderContainer>
      <HourglassBottom />
      {message}
    </LoaderContainer>
  );
}

export default LoadIndicator;
