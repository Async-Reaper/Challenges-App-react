import { Modal } from '@mui/material'
import React, { FC } from 'react'

const ModalWindow: FC = () => {
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
                
        </Modal>
    )
}

export default ModalWindow