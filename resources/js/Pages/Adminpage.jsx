import React from 'react';
import { TextField, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Chip, IconButton, Paper } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import DescriptionIcon from '@mui/icons-material/Description';
import DownloadIcon from '@mui/icons-material/Download';
import Label from '@/Components/Label';
import Checkbox from '@mui/material/Checkbox';
import { Inertia } from '@inertiajs/inertia';

export default function Adminpage({appointments}) {
    appointments.data = appointments.data.map(i => {
        let createdAtArray = i.created_at.split(''); // Convertir en tableau de caractères

        for (var i1 = 0; i1 < createdAtArray.length; i1++) {
            if (createdAtArray[i1] === 'T') {
                createdAtArray[i1] = ' '; // Remplacer 'T' par un espace
            } else if (
                createdAtArray[i1-1] === '.' &&
                createdAtArray[i1] === '0' &&
                createdAtArray[i1 + 1] === '0' &&
                createdAtArray[i1 + 2] === '0' &&
                createdAtArray[i1 + 3] === '0' &&
                createdAtArray[i1 + 4] === '0' &&
                createdAtArray[i1 + 5] === '0' &&
                createdAtArray[i1 + 6] === 'Z'
            ) {
                // Remplacer les '0000000Z' par des espaces
                for (let j = 0; j < 8; j++) {
                    createdAtArray[i1 + j] = ' ';
                }
            }
        }

        // Rejoindre le tableau en une nouvelle chaîne
        i.created_at = createdAtArray.join('');
        return i;
    });



console.log(appointments)
  return (
    <div style={{ padding: 16 }}>
      {/* Section du header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
        <div>
          <h2 style={{ margin: 0 }}>Invoices</h2>
          <p style={{ color: 'gray', margin: 0 }}>30 done this month</p>
        </div>

        <TextField
          variant="outlined"
          placeholder="Search"
          size="small"
          InputProps={{
            startAdornment: <SearchIcon position="start" />,
          }}
          style={{ width: 150 }}
        />

        <Button variant="contained" color="primary" style={{ backgroundColor: '#000' }}>
          NEW INVOICE
        </Button>
      </div>

      {/* Tableau */}
      <TableContainer component={Paper}>
        <Table>
          {/* Header du tableau */}
          <TableHead>
            <TableRow>
                <TableCell><Checkbox /></TableCell>
              <TableCell>Customer</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone number</TableCell>
              <TableCell>Appointment Date</TableCell>
              <TableCell>Status</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {appointments.data.map((invoice, index) => (
              <TableRow key={index}>
                <TableCell><Checkbox /></TableCell>
                <TableCell>{invoice.full_name}</TableCell>
                <TableCell>{invoice.email}</TableCell>
                <TableCell>{invoice.tele}</TableCell>
                <TableCell>{invoice.created_at}</TableCell>
                <TableCell><Label label={invoice.status} /></TableCell>

                <TableCell align="center">
                  <IconButton aria-label="document">
                    <DescriptionIcon />
                  </IconButton>
                  <IconButton aria-label="download">
                    <DownloadIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
            <div className="flex justify-between items-center mt-4">


{appointments.links.map((link, index) => {
    if (link.label !== 'Next &raquo;'  && link.label !== '&laquo; Previous') {
    return (
        <button
            key={index}
            className={`px-4 py-2 ${link.active ? 'bg-purple-600 text-white' : 'bg-gray-100 text-gray-600'} rounded-md`}
            onClick={() => Inertia.get(link.url)}
        >
            {link.label}
        </button>
    );
    }
    return null; // This will not render the button for "Next »"
})}


</div>
          </TableBody>
        </Table>
      </TableContainer>

    </div>
  );
};
