import styled from "@emotion/styled";
import React, { FC } from "react";

interface FormProps {
  children: React.ReactNode;
  method: string;
  onSubmit: (e: React.MouseEvent<HTMLFormElement>) => void;
}

const Form = styled("form")({
  boxShadow: "0 0 10px #1c1c1c",
  background: "#442f7f",
  display: "flex",
  flexDirection: "column",
  padding: 20,
  borderRadius: 10,
});

const FormWrapper: FC<FormProps> = ({ children, onSubmit, method }) => {
  return (
    <Form method={method} onSubmit={onSubmit}>
      {children}
    </Form>
  );
};

export default FormWrapper;
