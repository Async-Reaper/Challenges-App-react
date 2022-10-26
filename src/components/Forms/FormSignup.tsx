import { Button } from "@mui/material";
import React, { FC } from "react";
import { useTypedDispatch } from "../../hooks/useTypedDispatch";
import { IUserSignup } from "../../models/IUserSignup";
import { signupUser } from "../../services/SignupService";
import { errorForm } from "../../store/reducers/errorSlice";
import ErrorText from "../UI/Error/ErrorText";
import FormWrapper from "../UI/FormWrapper/FormWrapper";
import Input from "../UI/Input/Input";
import AssignmentIndOutlinedIcon from "@mui/icons-material/AssignmentIndOutlined";
import { useInput } from "../../hooks/useInput";
import { useTypedSelector } from "../../hooks/useTypedSelector";

const FormSignup: FC = () => {
  const dispatch = useTypedDispatch();
  const { error, message } = useTypedSelector((state) => state.signup);

  const firstName = useInput("", { isEmpty: true });
  const surname = useInput("", { isEmpty: true });
  const userName = useInput("", { isEmpty: true });
  const email = useInput("", { isEmpty: true, emailValid: true });
  const password = useInput("", {
    isEmpty: true,
    passwordValid: true,
    minLength: 8,
  });
  const repeatPassword = useInput("", { isEmpty: true });

  const signupData: IUserSignup = {
    first_name: firstName.value,
    surname: surname.value,
    username: userName.value,
    email: email.value,
    password: password.value,
    password2: repeatPassword.value,
  };

  const handleSignup = (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    firstName.onBlur();
    surname.onBlur();
    userName.onBlur();
    email.onBlur();
    password.onBlur();
    repeatPassword.onBlur();

    if (
      !firstName.isEmpty &&
      !surname.isEmpty &&
      !userName.isEmpty &&
      !email.emailValid &&
      !password.passwordValid &&
      !password.isEmpty &&
      repeatPassword.value === password.value
    ) {
      dispatch(signupUser(signupData));
    }
  };

  return (
    <FormWrapper method="POST" onSubmit={(e) => handleSignup(e)}>
      <Input
        label="First name"
        value={firstName.value}
        onChange={firstName.onChange}
      />
      {firstName.isDirty && firstName.isEmpty && (
        <ErrorText>The field is empty</ErrorText>
      )}
      <Input
        label="Surname"
        value={surname.value}
        onChange={surname.onChange}
      />
      {surname.isDirty && surname.isEmpty && (
        <ErrorText>The field is empty</ErrorText>
      )}
      <Input
        label="Username"
        value={userName.value}
        onChange={userName.onChange}
      />
      {userName.isDirty && userName.isEmpty && (
        <ErrorText>The field is empty</ErrorText>
      )}
      <Input
        label="Email"
        type="email"
        value={email.value}
        onChange={email.onChange}
      />
      {email.isDirty && email.isEmpty && (
        <ErrorText>The field is empty</ErrorText>
      )}
      {email.isDirty && email.emailValid && (
        <ErrorText>Email incorrected</ErrorText>
      )}
      <Input
        label="Password"
        type="password"
        value={password.value}
        onChange={password.onChange}
      />
      {password.isDirty && password.isEmpty && (
        <ErrorText>The field is empty</ErrorText>
      )}
      {password.isDirty && password.minLength && (
        <ErrorText>Must be more than 8 characters</ErrorText>
      )}
      {password.isDirty && password.passwordValid && (
        <ErrorText>
          The password must contain: latin capital and lowercase characters and
          numbers
        </ErrorText>
      )}
      <Input
        label="Repeat password"
        type="password"
        value={repeatPassword.value}
        onChange={repeatPassword.onChange}
      />
      {repeatPassword.isDirty && repeatPassword.isEmpty && (
        <ErrorText>The field is empty</ErrorText>
      )}
      {repeatPassword.isDirty && repeatPassword.value !== password.value && (
        <ErrorText>Passwords do not match</ErrorText>
      )}
      <Button type="submit" variant="contained">
        <AssignmentIndOutlinedIcon />
        Signup
      </Button>
      {error && <ErrorText>{message}</ErrorText>}
    </FormWrapper>
  );
};

export default FormSignup;
