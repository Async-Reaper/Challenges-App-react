import React, { FC } from 'react'

const Calendar: FC = () => {
    return (
        <LocalizationProvider dateAdapter={DateAdapter}>
            <StyledDateTimePicker onClick={(e) => console.log(e.target)}
                {...props}
                renderInput={(params) => 
                                    <TextField {...params} /> }
            />
        </LocalizationProvider>
    )
}

export default Calendar