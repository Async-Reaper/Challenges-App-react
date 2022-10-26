import { TextField } from "@mui/material";
import React, { FC } from "react";
import styled from "@emotion/styled";

interface InputProps {
  label: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputWrapper = styled(TextField)({
  "& .MuiFilledInput-root": {
    background: "rgba( 140 ,186 ,232, .115)",
  },
});

const Input: FC<InputProps> = ({ label, onChange, type, value }) => {
  return (
    <InputWrapper
      label={label}
      type={type}
      value={value}
      variant="filled"
      margin="normal"
      onChange={onChange}
    />
  );
};

export default Input;
