import React, {FC} from "react";
import {IInputProps} from "./Input.types";
import {InputWrapper} from "./Input.style";


const Input: FC<IInputProps> = ({ label, onChange, type, value }) => {
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
