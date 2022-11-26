import { DateTimePicker, LocalizationProvider } from "@mui/lab";
import React, { FC } from "react";
import { AdapterLuxon } from "@mui/x-date-pickers/AdapterLuxon";
import { TextField } from "@mui/material";
import {ICalendarProps} from "./Calendar.types";


const Calendar: FC<ICalendarProps> = ({ label, value, onChange }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterLuxon}>
      <DateTimePicker
        label={label}
        value={value}
        onChange={onChange}
        renderInput={(params: any) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
};

export default Calendar;
