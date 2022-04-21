import { Button } from '@mui/material'
import React from 'react'
import { useTypedDispatch } from '../../hooks/useTypedDispatch'
import { setStatusModal } from '../../store/reducers/modalSlice'
import FormCreateChallenge from '../Forms/FormCreateChallenge'
import ModalWindow from '../ModalWindow/ModalWindow'

const CreateChallenge = () => {
    const dispatch = useTypedDispatch()
    return (
        <div>
            <Button type='submit' variant="contained" onClick={() => dispatch(setStatusModal(true))}>Create challenge</Button>
            <ModalWindow>
                <FormCreateChallenge />
            </ModalWindow>
        </div>
    )
}

export default CreateChallenge