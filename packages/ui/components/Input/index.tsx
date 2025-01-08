import React from 'react';
import { Controller } from 'react-hook-form';
import { InputProps } from './types';
import { InputAdornment, MenuItem, TextField } from '@mui/material';
import {
  formatMoney,
  formatMoneyBlr,
  removeMoneyFormat,
} from '@calculadoras/core/helpers';

const Input: React.FC<InputProps> = ({
  errorMessage,
  name,
  defaultValue = '',
  onChange,
  normalizer,
  maxCharacters,
  options,
  endAdornment,
  isInputMoney = false,
  slotProps,
  ...rest
}) => {
  return (
    <Controller
      defaultValue={isInputMoney ? formatMoneyBlr(0) : defaultValue}
      name={name}
      render={({ field: { onChange: _onChange, value } }) => {
        return (
          <TextField
            {...rest}
            name={name}
            autoComplete="off"
            value={value}
            helperText={errorMessage}
            error={Boolean(errorMessage)}
            select={Boolean(options?.length)}
            onChange={(e) => {
              let newValue;

              if (isInputMoney) {
                newValue = formatMoneyBlr(e.target.value);
              } else {
                newValue = normalizer
                  ? normalizer(e.target.value)
                  : e.target.value;
              }

              if (!maxCharacters || newValue.length <= maxCharacters) {
                _onChange(newValue);
                if (onChange) onChange({ value: newValue, name });
              }
            }}
            onFocus={(e) => {
              if (isInputMoney) {
                const number = removeMoneyFormat(e.target.value) as number;
                if (number === 0) _onChange('R$ ');
                else if (Number.isInteger(number))
                  _onChange(`R$ ${formatMoney(number, true)}`);
              }
            }}
            onBlur={(e) => {
              if (isInputMoney) {
                const number = removeMoneyFormat(
                  e.target.value,
                  false
                ) as number;

                if (!number) _onChange('R$ 0,00');
                if (Number.isInteger(number))
                  _onChange(`R$ ${formatMoney(number, true)},00`);
              }
            }}
            slotProps={{
              ...slotProps,
              input: {
                ...slotProps?.input,
                endAdornment: endAdornment ? (
                  <InputAdornment position="end">{endAdornment}</InputAdornment>
                ) : null,
              },
            }}
          >
            {options &&
              options.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
          </TextField>
        );
      }}
    />
  );
};

export default Input;
