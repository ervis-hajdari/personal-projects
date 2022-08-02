import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectAutoWidth({
  handleSelect,
  searchOptions,
  selectedCountryId,
}) {
  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-simple-select-label">Country</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedCountryId}
          label="Country"
          onChange={handleSelect}
        >
          {searchOptions.map((option) => (
            <MenuItem key={option.id} value={option.id}>
              {option.country}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
