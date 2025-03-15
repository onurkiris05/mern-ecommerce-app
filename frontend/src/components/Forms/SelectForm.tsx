import { InputLabel, Select, MenuItem, FormControl } from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";
import { useState } from "react";
import { OptionProps } from "../../api/constants";

interface SelectFormProps {
  label: string;
  name: string;
  menuItems?: OptionProps[];
  OnChange: (event: SelectChangeEvent<string | number>) => void;
}

function SelectForm({ label, name, menuItems, OnChange }: SelectFormProps) {
  const [value, setValue] = useState<number | string>("");

  function handleChange(e: SelectChangeEvent<string | number>) {
    setValue(e.target.value);
    OnChange(e);
  }

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }}>
      <InputLabel id={`${label}-label`}>{label}</InputLabel>
      <Select
        labelId={`${label}-label`}
        id={`${label}-select`}
        value={value}
        label={label}
        name={name}
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {menuItems?.map((item, i) => (
          <MenuItem key={i} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default SelectForm;
