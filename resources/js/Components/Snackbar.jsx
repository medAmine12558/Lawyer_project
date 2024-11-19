import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { Helmet } from 'react-helmet';


export default function CustomizedSnackbars({open,onClose,message}) {

    return (
    <div>
        <div>
            <Helmet>

                <link rel="icon" type="image/jpg+xml" href="/images/Black and Cream Vintage Illustrative Law Services Logo.png" />
                <meta name="description" content="Hicham Allami - Moroccan Lawyer"></meta>
                <link rel="canonical" href="https://Allamilawoffice.com/" />
                <meta property="og:title" content="Hicham Allami - Moroccan Lawyer"></meta>
                <meta property="og:description"content="Hicham Allami - Moroccan Lawyer" />
                <meta property="og:url" content="https://Hicham Allami.com/" />
                <meta property="og:image" content="images/SFG-Lawyer.jpg" />
                <meta property="og:site_name" content="Hicham Allami - Moroccan Lawyer"></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Hicham Allami - Moroccan Lawyer</title>
                <meta property="og:type" content="website"></meta>
                <meta name="keywords" content="Moroccan Lawyer,Hiacham Allami" />
            </Helmet>
            {/* Autres contenus */}
        </div>
      <Snackbar open={open} autoHideDuration={6000} onClose={onClose}>
        <Alert
          onClose={onClose}
          severity="success"
          variant="filled"
          sx={{ width: '100%' }}
        >
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
}
