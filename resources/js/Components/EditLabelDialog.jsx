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
import { Helmet } from 'react-helmet';


export default function EditLabelDialog({open,onClose,status,statuschosed,action,data}) {
    const [status1,setStatus1]=React.useState(statuschosed)

    React.useEffect(()=>{
        data(status1)
    },[status1])


  return (
    <React.Fragment>
        <div>
            <Helmet>

                <link rel="icon" type="image/jpg+xml" href="/images/Black and Cream Vintage Illustrative Law Services Logo.png" />
                <meta name="description" content="Hicham Allami - Morrocan Lawyer"></meta>
                <link rel="canonical" href="https://Allamilawoffice.com/" />
                <meta property="og:title" content="Hicham Allami - Morrocan Lawyer"></meta>
                <meta property="og:description"content="Hicham Allami - Morrocan Lawyer" />
                <meta property="og:url" content="https://Hicham Allami.com/" />
                <meta property="og:image" content="images/SFG-Lawyer.jpg" />
                <meta property="og:site_name" content="Hicham Allami - Morrocan Lawyer"></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Hicham Allami - Morrocan Lawyer</title>
                <meta property="og:type" content="website"></meta>
                <meta name="keywords" content="Morrocan Lawyer,Hiacham Allami" />
            </Helmet>
            {/* Autres contenus */}
        </div>
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

