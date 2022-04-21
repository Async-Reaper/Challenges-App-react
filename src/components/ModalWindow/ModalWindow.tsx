import { Modal } from '@mui/material'
import React, { FC } from 'react'
import { useTypedDispatch } from '../../hooks/useTypedDispatch'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { setStatusModal } from '../../store/reducers/modalSlice'

interface ModalWindowProps {
    children: any
}

const ModalWindow: FC<ModalWindowProps> = ({children}) => {
    const {modalStatus} = useTypedSelector(state => state.modal)
    const dispatch = useTypedDispatch()
    return (
        <Modal
            open={modalStatus}
            onClose={() => dispatch(setStatusModal(false))}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            {children}
        </Modal>
    )
}

export default ModalWindow