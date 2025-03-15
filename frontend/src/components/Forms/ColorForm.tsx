import { useState } from "react";
import styled from "styled-components";

const ColorContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

const ColorCircle = styled.div<{ color: string; selected: boolean; size: number }>`
  width: ${(props) => props.size}rem;
  height: ${(props) => props.size}rem;
  background-color: ${(props) => props.color};
  border-radius: 50%;
  border: ${(props) => (props.selected ? "3px solid aqua" : "1px solid #ccc")};
  cursor: pointer;

  &:hover {
    border: 2px solid aqua;
  }
`;

interface ColorFormProps {
  name: string;
  colors?: string[];
  onChange: (value: string) => void;
  size?: number;
}

function ColorForm({ colors, onChange, size = 1 }: ColorFormProps) {
  const [selectedColor, setSelectedColor] = useState<string>("");

  const handleSelect = (color: string) => {
    setSelectedColor(color);
    onChange(color);
  };

  return (
    <ColorContainer>
      {colors?.map((color, index) => (
        <ColorCircle
          key={index}
          color={color}
          selected={selectedColor === color}
          size={size}
          onClick={() => handleSelect(color)}
        />
      ))}
    </ColorContainer>
  );
}

export default ColorForm;
