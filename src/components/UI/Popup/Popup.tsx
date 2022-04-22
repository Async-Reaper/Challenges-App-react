import { Alert, Collapse, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import React, { FC } from 'react'
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { useTypedDispatch } from '../../../hooks/useTypedDispatch';
import { closePopup } from '../../../store/reducers/popupSlice';

const Popup: FC = () => {
    const {popupStatus, popupText} = useTypedSelector(state => state.popup)
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
                            dispatch(closePopup());
                        }}
                    >
                    <CloseIcon fontSize="inherit" />
                    </IconButton>
                }
                sx={{ mb: 2 }}
            >
                {popupText}
            </Alert>
        </Collapse>
    )
}

export default Popup