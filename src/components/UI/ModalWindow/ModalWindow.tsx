import { Box, Modal } from "@mui/material";
import React, { FC } from "react";
import { useTypedDispatch } from "../../../hooks/useTypedDispatch";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { setStatusModal } from "../../../store/reducers/modalSlice";
import {IModalWindowProps} from "./ModalWindow.types";
import {style} from "./ModalWindow.style";


const ModalWindow: FC<IModalWindowProps> = ({ children }) => {
  const { modalStatus } = useTypedSelector((state) => state.modal);
  const dispatch = useTypedDispatch();
  return (
    <Modal
      open={modalStatus}
      onClose={() => dispatch(setStatusModal(false))}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>{children}</Box>
    </Modal>
  );
};

export default ModalWindow;
