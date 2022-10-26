import React, { FC } from "react";
import { Alert, Collapse, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { useTypedDispatch } from "../../../hooks/useTypedDispatch";
import { closeErrorPopup } from "../../../store/reducers/errorSlice";

const PopupError: FC = () => {
  const { errorStatus, errorText } = useTypedSelector((state) => state.error);
  const dispatch = useTypedDispatch();

  return (
    <Collapse in={errorStatus}>
      <Alert
        severity="error"
        action={
          <IconButton
            aria-label="close"
            color="inherit"
            size="small"
            onClick={() => {
              dispatch(closeErrorPopup());
            }}
          >
            <CloseIcon fontSize="inherit" />
          </IconButton>
        }
        sx={{ mb: 2 }}
      >
        {errorText}
      </Alert>
    </Collapse>
  );
};

export default PopupError;
