import { Box, Modal } from "@mui/material";
import React, { FC } from "react";
import { useTypedDispatch } from "../../../hooks/useTypedDispatch";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { setStatusModal } from "../../../store/reducers/modalSlice";

interface ModalWindowProps {
  children: React.ReactNode;
}

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "transparent",
  p: 4,
};

const ModalWindow: FC<ModalWindowProps> = ({ children }) => {
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
