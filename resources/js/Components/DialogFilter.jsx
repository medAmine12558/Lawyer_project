import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { TrainRounded } from '@mui/icons-material';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Inertia } from '@inertiajs/inertia';

export default function DialogFilter({onClose,open,status}) {
    const [value,setValue]=React.useState('')
    const handleChange = (event) => {
        setValue(event.target.value)
    };

    function hundel_submit(){
        Inertia.post('/filter_with_status',value)
    }
  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
            chose the fields to filter
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Status</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label="Case type"
          onChange={handleChange}
        >
          {status.map((i,index)=>(
            <MenuItem key={index} value={i}>{i}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>close</Button>
          <Button onClick={hundel_submit} autoFocus>
            Filter
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
