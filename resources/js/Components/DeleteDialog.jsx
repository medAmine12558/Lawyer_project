import React from "react";
import { useState } from "react";
import { Inertia } from '@inertiajs/inertia';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import { Helmet } from 'react-helmet';


export function DeleteDialog({open, onClose,action}){

      return (
        <>
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
