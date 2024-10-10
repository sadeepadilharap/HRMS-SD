// src/components/CalendarDialog.jsx
import React from 'react';
import { Dialog, DialogTitle, DialogContent, TextField } from '@mui/material';
import { DateRangePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const CalendarDialog = ({ open, handleClose, leaveDates }) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Leave Dates</DialogTitle>
      <DialogContent>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateRangePicker
            startText="Start Date"
            endText="End Date"
            value={leaveDates}
            onChange={() => {}}  // Keep this as a no-op since dates should not be changeable
            renderInput={(startProps, endProps) => (
              <>
                <TextField {...startProps} />
                <TextField {...endProps} />
              </>
            )}
            disabled  // Make the DateRangePicker non-editable
          />
        </LocalizationProvider>
      </DialogContent>
    </Dialog>
  );
};

export default CalendarDialog;
