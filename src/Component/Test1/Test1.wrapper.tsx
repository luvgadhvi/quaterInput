import React from "react";
import { FormControl, FormHelperText, InputLabel, MenuItem, Select, SelectChangeEvent, TextField, Typography } from "@mui/material";

function Test1Wrapper({ quarterList, handleQuarterChange, selectedQuarter }: Test1WrapperProps) {
  console.log("quarterList", quarterList)
  return (
    <>
      <Typography>Welcome to my react app</Typography>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">Quarter List </InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={selectedQuarter?.value}
          label="Age"
          onChange={handleQuarterChange}
        >
          <MenuItem value="">

          </MenuItem>
          {quarterList.map((value) => {
            return <MenuItem key={value.label} value={value.value}>{value.label}</MenuItem>
          })}
        </Select>
      </FormControl>
    </>
  )

}

interface Test1WrapperProps {
  quarterList: QuarterDropDownValue[],
  handleQuarterChange: (event: SelectChangeEvent) => void;
  selectedQuarter: QuarterDropDownValue | null
}
type QuarterDropDownValue = {
  label: string;
  value: string
}
export default Test1Wrapper;