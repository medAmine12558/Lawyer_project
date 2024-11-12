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
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import axios from 'axios';
import { Helmet } from 'react-helmet';


export default function DialogFilter({onClose,open,status,cases,setAppointments1}) {
    const [status_value,setStatus_value]=React.useState(null)
    const [casetype_value,setCasetype_value]=React.useState(null)
    const [date_value,setDate_value]=React.useState({
        D:null,
        M:null,
        Y:null
    })

    function hundel_submit(){
        const data={
            status:status_value,
            case_type:casetype_value,
            date:`${date_value.Y}-${date_value.M}-${date_value.D}`
        }


        axios.post('/filter',data)
        .then(res=>{

            setAppointments1(res.data)
            onClose()
        })
    }
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
          value={status_value}
          label="Case type"
          onChange={(e)=>{setStatus_value(e.target.value)}}
        >
            <MenuItem value={null}>none</MenuItem>
          {status.map((i,index)=>(
            <MenuItem key={index} value={i}>{i}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
          </DialogContentText>
          <br />
          <DialogContentText id="alert-dialog-description">
          <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">case type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={casetype_value}
          label="Case type"
          onChange={(e)=>{setCasetype_value(e.target.value)}}
        >
            <MenuItem value={null}>none</MenuItem>
          {cases.map((i,index)=>(
            <MenuItem key={index} value={i}>{i}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
    <br />
          </DialogContentText>
          <LocalizationProvider dateAdapter={AdapterDayjs} >
            <DatePicker onChange={(nvvalue)=>{setDate_value({
                D:nvvalue.date(),
                M:nvvalue.month()+1,
                Y:nvvalue.year()
            })}}/>
          </LocalizationProvider>
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
