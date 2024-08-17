import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';

interface SortOption {
  value: string;
  label: string;
}

interface PostSortProps {
  options: SortOption[];
  onSort: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function PostSort({ options, onSort }: PostSortProps) {
  return (
    <TextField select size="small" value="latest" onChange={onSort}>
      {options.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
}
