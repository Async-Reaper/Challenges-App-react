import { Button } from "@mui/material";
import React from "react";
import { useTypedDispatch } from "../../hooks/useTypedDispatch";
import { setStatusModal } from "../../store/reducers/modalSlice";
import FormCreateChallenge from "../Forms/FormCreateChallenge";
import ModalWindow from "../UI/ModalWindow/ModalWindow";
import AddBoxIcon from "@mui/icons-material/AddBox";

const CreateChallenge = () => {
  const dispatch = useTypedDispatch();
  return (
    <div>
      <Button
        type="submit"
        variant="contained"
        onClick={() => dispatch(setStatusModal(true))}
      >
        <AddBoxIcon />
        challenge
      </Button>
      <ModalWindow>
        <FormCreateChallenge />
      </ModalWindow>
    </div>
  );
};

export default CreateChallenge;
