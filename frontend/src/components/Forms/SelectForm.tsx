import { InputLabel, Select, MenuItem, FormControl } from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";
import { useState } from "react";

interface MenuItemProps {
  label: string;
  value: number | string;
}

interface SelectFormProps {
  label: string;
  menuItems: MenuItemProps[];
  OnChange: (value: string | number) => void;
}

function SelectForm({ label, menuItems, OnChange }: SelectFormProps) {
  const [value, setValue] = useState<number | string>("");

  function handleChange(e: SelectChangeEvent<string | number>) {
    setValue(e.target.value);
    OnChange(e.target.value);
  }

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }}>
      <InputLabel id={`${label}-label`}>{label}</InputLabel>
      <Select
        labelId={`${label}-label`}
        id={`${label}-select`}
        value={value}
        label={label}
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {menuItems &&
          menuItems.length > 0 &&
          menuItems.map((item, i) => (
            <MenuItem key={i} value={item.value}>
              {item.label}
            </MenuItem>
          ))}
      </Select>
    </FormControl>
  );
}

export default SelectForm;
