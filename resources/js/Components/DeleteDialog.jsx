import React from "react";
import { useState } from "react";
import { Inertia } from '@inertiajs/inertia';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';

export function DeleteDialog({open, onClose,action}){

      return (
        <>
         <Dialog
        open={open}
        onClose={onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            are you sure to delete this item?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>REFUSER</Button>
          <Button onClick={action} autoFocus>
            ACCEPTER
          </Button>
        </DialogActions>
      </Dialog>
        </>
      )
}
