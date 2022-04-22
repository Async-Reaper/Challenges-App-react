import { Alert, Collapse, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import React, { FC } from 'react'
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { useTypedDispatch } from '../../../hooks/useTypedDispatch';
import { setStatusModal } from '../../../store/reducers/modalSlice';

const Popup: FC = () => {
    const {popupStatus} = useTypedSelector(state => state.popup)
    const dispatch = useTypedDispatch()
    return (
        <Collapse in={popupStatus}>
            <Alert
                action={
                    <IconButton
                        aria-label="close"
                        color="inherit"
                        size="small"
                        onClick={() => {
                            dispatch(setStatusModal(false));
                        }}
                    >
                    <CloseIcon fontSize="inherit" />
                    </IconButton>
                }
                sx={{ mb: 2 }}
            >
                Close me!
            </Alert>
        </Collapse>
    )
}

export default Popup