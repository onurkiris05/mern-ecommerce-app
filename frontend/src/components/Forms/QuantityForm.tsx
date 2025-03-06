import { useState } from "react";
import styled from "styled-components";

interface QuantityFormProps {
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  initialValue?: number;
  step?: number;
  size?: number;
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Button = styled.button<{ size: number }>`
  font-size: ${(props) => props.size * 1.5}rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: none;
  cursor: pointer;
`;

const Input = styled.input<{ size: number }>`
  width: ${(props) => props.size * 2}rem;
  font-size: ${(props) => props.size}rem;
  margin-top: 5px;
  text-align: center;
  border: 1px solid var(--clr-3);
  border-radius: 1rem;
  outline: none;
`;

function QuantityForm({
  onChange,
  min = 1,
  max,
  initialValue = 1,
  step = 1,
  size = 2,
}: QuantityFormProps) {
  const [value, setValue] = useState<number>(initialValue);

  const updateValue = (newValue: number) => {
    if (newValue < min) return;
    if (max !== undefined && newValue > max) return;

    setValue(newValue);
    onChange(newValue);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value, 10);
    if (!isNaN(newValue)) {
      updateValue(newValue);
    }
  };

  return (
    <Wrapper>
      <Button type="button" size={size} onClick={() => updateValue(value - step)}>
        -
      </Button>
      <Input size={size} type="text" value={value} onChange={handleInputChange} />
      <Button type="button" size={size} onClick={() => updateValue(value + step)}>
        +
      </Button>
    </Wrapper>
  );
}

export default QuantityForm;
