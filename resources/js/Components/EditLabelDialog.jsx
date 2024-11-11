import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { Inertia } from '@inertiajs/inertia';
import axios from 'axios';
import react from '@heroicons/react';

export default function EditLabelDialog({open,onClose,status,statuschosed,action,data}) {
    const [status1,setStatus1]=React.useState(statuschosed)

    React.useEffect(()=>{
        data(status1)
    },[status1])


  return (
    <React.Fragment>

      <Dialog
        open={open}
        onClose={onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          <Select
                labelId="demo-simple-select-helper-label"
                id="status"
                value={status1}
                label="status"
                onChange={(e)=>{setStatus1(e.target.value)}}
            >
                {status.map((i,index)=>(
                    <MenuItem key={index} value={i}>{i}</MenuItem>
                ))}
            </Select>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Disagree</Button>
          <Button onClick={action} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

