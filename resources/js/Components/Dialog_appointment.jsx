import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export default function Dialog_appointment({cases}) {
  const [open, setOpen] = React.useState(false);
  const [selected_case , setSelected_case]=React.useState();
  const [values,setValues]=React.useState({
    full_name:'',
    email:'',
    tele:'',
    case_type:''
})


const [emailerror , setEmailerror]=React.useState()
const [phoneNbrerror , setPhoneNbrerror]=React.useState()

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  //function that hundel the submit of the form
  function hundel_submit(e){
    e.preventDefault();
    console.log(values)
  }

  //function that hundel the email error
  function hundel_email_error(e){
    if(e.target.value.includes('@gmail.com')){
        setEmailerror('')
        setValues((prevValues)=>({...prevValues,email:e.target.value}))
    }
    else{
        setEmailerror('this email is incorrect !')
        setValues((prevValues)=>({...prevValues,email:''}))
    }
  }

  //function that hundel the phone error
  function hundel_phoneNbr_error(e){
    if(e.target.value.length!=10){
        setPhoneNbrerror('this phone numbre is incorrect !')
        setValues((prevValues)=>({...prevValues,tele:''}))
    }else{
        setPhoneNbrerror('')
        setValues((prevValues)=>({...prevValues,tele:e.target.value}))
    }
  }

  //this is the return of this component
  return (
    <div  style={{width:'100px'}}>
      <Button variant="outlined" onClick={handleClickOpen}>
      Schedule a Consultation
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
        Schedule a Consultation
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={(theme) => ({
            position: 'absolute',
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          })}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>

            <TextField id="outlined-basic" label="Full name" variant="outlined" onChange={(e)=>{setValues((prevValues)=>({...prevValues,full_name:e.target.value}))}}/>
            <br />
            <br />
            <TextField id="outlined-basic" label="Your Email" variant="outlined" onChange={hundel_email_error} error={!! emailerror} helperText={emailerror} />
            <br />
            <br />
            <TextField id="outlined-basic" label="Your phone number" variant="outlined" onChange={hundel_phoneNbr_error} error={!! phoneNbrerror} helperText={phoneNbrerror}/>
            <br />
            <br />
            <FormControl sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-helper-label">case type</InputLabel>
            <Select
                labelId="demo-simple-select-helper-label"
                id="select_case"
                value={selected_case}
                label="type case"
                onChange={(e)=>{setSelected_case(e.target.value); setValues((prevValues)=>({...prevValues,case_type:e.target.value}))}}
            >
                {cases.map(
                (c)=><MenuItem value={c}>{c}</MenuItem>
                )}
            </Select>
             </FormControl>



        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={hundel_submit}>
            Submit
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
