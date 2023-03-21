import { Button } from "@mui/material";
import React, { FC } from "react";
import { useInput } from "../../hooks/useInput";
import { useTypedDispatch } from "../../hooks/useTypedDispatch";
import { IChangeEmail } from "../../models/IChangeEmail";
import { changeEmail } from "../../services/SettingsService";
import { errorForm } from "../../store/reducers/errorSlice";
import ErrorText from "../../shared/ui/Error/ErrorText";
import FormWrapper from "../../shared/ui/FormWrapper/FormWrapper";
import Input from "../../shared/ui/Input/Input";

const FormChangeEmail: FC = () => {
  const dispatch = useTypedDispatch();
  const email = useInput("", { isEmpty: true, emailValid: true });

  const newEmail: IChangeEmail = {
    new_user_email: email.value,
  };

  const handleChangeEmail = (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    email.onBlur();
    if (!email.isEmpty && !email.emailValid) {
      dispatch(changeEmail(newEmail));
    }
  };
  return (
    <FormWrapper method="PUT" onSubmit={(e) => handleChangeEmail(e)}>
      <Input label="New email" value={email.value} onChange={email.onChange} />
      {email.isDirty && email.isEmpty && <ErrorText>The field is empty</ErrorText>}
      {email.isDirty && email.emailValid && <ErrorText>Email incorrected</ErrorText>}
      <Button type="submit" variant="contained">
        Change email
      </Button>
    </FormWrapper>
  );
};

export default FormChangeEmail;
