import React from 'react';
import { TextField, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Chip, IconButton, Paper } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import DescriptionIcon from '@mui/icons-material/Description';
import DownloadIcon from '@mui/icons-material/Download';
import Label from '@/Components/Label';
import Checkbox from '@mui/material/Checkbox';
import { Inertia } from '@inertiajs/inertia';
import DialogFilter from '@/Components/DialogFilter';
import Dropdown from '@/Components/Dropdown';
import { usePage } from '@inertiajs/react';

export default function Adminpage({appointments,statustypes}) {
  const [filter_clicked,setFilter_clicked]=React.useState(false)
  console.log(statustypes);
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

    const user = usePage().props.auth.user;

console.log(appointments)
  return (
    <div style={{ padding: 16 }}>
      {/* Section du header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
        <div>
          <h2 style={{ margin: 0 }}>Invoices</h2>
          <p style={{ color: 'gray', margin: 0 }}>30 done this month</p>
        </div>


        <Dropdown>
                                    <Dropdown.Trigger>
                                        <span className="inline-flex rounded-md">
                                            <button
                                                type="button"
                                                className="inline-flex items-center rounded-md border border-transparent bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition duration-150 ease-in-out hover:text-gray-700 focus:outline-none"
                                            >
                                                {user.name}

                                                <svg
                                                    className="-me-0.5 ms-2 h-4 w-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </button>
                                        </span>
                                    </Dropdown.Trigger>

                                    <Dropdown.Content>
                                        <Dropdown.Link
                                            href={route('profile.edit')}
                                        >
                                            Profile
                                        </Dropdown.Link>
                                        <Dropdown.Link
                                            href={route('logout')}
                                            method="post"
                                            as="button"
                                        >
                                            Log Out
                                        </Dropdown.Link>
                                    </Dropdown.Content>
                                </Dropdown>

      </div>
      <Button variant="contained" color="primary" style={{ backgroundColor: '#000' }}>
          NEW INVOICE
        </Button>
        <Button onClick={()=>{setFilter_clicked(true)}} variant="contained" color="primary" style={{ backgroundColor: '#000',marginLeft:'20px' }}>
          Filter
        </Button>
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
      {filter_clicked &&(
        <DialogFilter onClose={()=>{setFilter_clicked(false)}} open={filter_clicked} status={statustypes}/>
      )}

    </div>
  );
};
