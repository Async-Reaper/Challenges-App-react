import React, {FC} from "react";
import {IFormProps} from "./FormWrapper.types";
import {Form} from "./FormWrapper.style";


const FormWrapper: FC<IFormProps> = ({ children, onSubmit, method }) => {
  return (
    <Form method={method} onSubmit={onSubmit}>
      {children}
    </Form>
  );
};

export default FormWrapper;
