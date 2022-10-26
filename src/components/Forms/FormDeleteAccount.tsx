import { Button } from "@mui/material";
import React, { FC } from "react";
import { useTypedDispatch } from "../../hooks/useTypedDispatch";
import { deleteAccount } from "../../services/SettingsService";

const FormDeleteAccount: FC = () => {
  const dispatch = useTypedDispatch();
  return (
    <div>
      <Button
        type="submit"
        variant="contained"
        onClick={() => dispatch(deleteAccount())}
      >
        Delete account
      </Button>
    </div>
  );
};

export default FormDeleteAccount;
