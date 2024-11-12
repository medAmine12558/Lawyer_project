import React, { useState , useCallback , useEffect } from 'react';
import {  Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton, Paper, Snackbar } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import DescriptionIcon from '@mui/icons-material/Description';
import DownloadIcon from '@mui/icons-material/Download';
import Label from '@/Components/Label';
import Checkbox from '@mui/material/Checkbox';
import { Inertia } from '@inertiajs/inertia';
import DialogFilter from '@/Components/DialogFilter';
import Dropdown from '@/Components/Dropdown';
import { usePage } from '@inertiajs/react';
import { DeleteDialog } from '@/Components/DeleteDialog';
import axios from 'axios';
import EditLabelDialog from '@/Components/EditLabelDialog';
import { Helmet } from 'react-helmet';

export default function Adminpage({appointments,statustypes,casetypes}) {
  const [filter_clicked,setFilter_clicked]=React.useState(false)
  const [appointments1,setAppointments1]=React.useState(appointments);
  const [checkeddelete,setCheckeddelete]=useState([])
  const [showdeletebtn,setShowdeletebtn]=useState(false)
  const [opendeletedialog,setSOpendeletedialog]=useState(false)
  const [openSnackbaredialog,setOpenSnackbaredialog]=useState(false)
  const [openEditLabelDialog,setOpenEditLabelDialog]=useState(false)
  const [id,setId]=useState(null)
  const [statuschosed,setStatuschosed]=useState(null)
  const [data_edit_label,setData_edit_label]=useState({})
  const [opensnackbareforeditstatus,setOpensnackbareforeditstatus]=useState(false)


    const user = usePage().props.auth.user;
    console.log(showdeletebtn);

    const handel_Check_Box_Change=useCallback((id)=>{
        const is_checked=checkeddelete.includes(id);
        if(is_checked){
            setCheckeddelete(checkeddelete.filter((i)=>i != id))
        }else{
            setCheckeddelete([...checkeddelete,id]);
        }
    },[checkeddelete, setCheckeddelete])



    useEffect(()=>{
        if(checkeddelete.length>0){
            setShowdeletebtn(true)
        }else{
            setShowdeletebtn(false)
        }
        })

        const handel_Delete=()=>{
            axios.delete('/deleteAppointmentWithBox',  {data: { checkeddelete: checkeddelete }}).then(res=>{
                setOpenSnackbaredialog(true)
            }).catch(error=>{
                console.log(error)
            })
        }

        function handel_edit_label(){
            const data={
                id:id,
                status:data_edit_label
            }
            axios.post('/editlabel',data).then(res=>{
                setOpensnackbareforeditstatus(true)
            })
        }

        useEffect(() => {
            if (openSnackbaredialog) {
                // Démarrer un timer pour recharger la page après 3 secondes (3000 ms)
                const timer = setTimeout(() => {
                    window.location.reload();
                }, 800); // Ajustez le délai selon vos besoins

                // Nettoyer le timer si le Snackbar se ferme ou si le composant se démonte
                return () => clearTimeout(timer);
            }
        }, [openSnackbaredialog]);


        useEffect(() => {
            if (opensnackbareforeditstatus) {
                // Démarrer un timer pour recharger la page après 3 secondes (3000 ms)
                const timer = setTimeout(() => {
                    window.location.reload();
                }, 800); // Ajustez le délai selon vos besoins

                // Nettoyer le timer si le Snackbar se ferme ou si le composant se démonte
                return () => clearTimeout(timer);
            }
        }, [opensnackbareforeditstatus]);


  return (
    <div style={{ padding: 16 }}>
        <div>
            <Helmet>

                <link rel="icon" type="image/jpg+xml" href="images/SFG-Lawyer.jpg" />
                <meta name="description" content="Hicham Allami - Morrocan Lawyer"></meta>
                <link rel="canonical" href="https://Allamilawoffice.com/" />
                <meta property="og:title" content="Hicham Allami - Morrocan Lawyer"></meta>
                <meta property="og:description"content="Hicham Allami - Morrocan Lawyer" />
                <meta property="og:url" content="https://Hicham Allami/adminpage.com/" />
                <meta property="og:image" content="images/SFG-Lawyer.jpg" />
                <meta property="og:site_name" content="Hicham Allami - Morrocan Lawyer - adminpage"></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Hicham Allami - Morrocan Lawyer - adminpage</title>
                <meta property="og:type" content="website"></meta>
                <meta name="keywords" content="Morrocan Lawyer,Hiacham Allami adminpage" />
            </Helmet>
            {/* Autres contenus */}
        </div>
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
            <TableCell>
            {showdeletebtn &&(
                            <button onClick={()=>{setSOpendeletedialog(true)}}>supprimer</button>
            )}
            </TableCell>
              <TableCell>Customer</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone number</TableCell>
              <TableCell>Appointment Date</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Case type</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {appointments1.data.map((invoice, index) => (
              <TableRow key={index}>
                <TableCell><Checkbox onClick={()=>{handel_Check_Box_Change(invoice.id) ; setShowdeletebtn(true)}} /></TableCell>
                <TableCell>{invoice.full_name}</TableCell>
                <TableCell>{invoice.email}</TableCell>
                <TableCell>{invoice.tele}</TableCell>
                <TableCell>{invoice.created_date}</TableCell>
                <TableCell><Label label={invoice.status} /></TableCell>
                <TableCell>{invoice.case_type}</TableCell>

                <TableCell><Button onClick={()=>{setOpenEditLabelDialog(true) ; setId(invoice.id) ; setStatuschosed(invoice.status)}} variant="outlined">Edit label</Button></TableCell>
              </TableRow>
            ))}
            <div className="flex justify-between items-center mt-4">


{appointments1.links.map((link, index) => {
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
        <DialogFilter onClose={()=>{setFilter_clicked(false)}} open={filter_clicked} status={statustypes} cases={casetypes} setAppointments1={setAppointments1}/>
      )}
       {opendeletedialog && (
                <DeleteDialog open={opendeletedialog} onClose={()=>{setSOpendeletedialog(false)}} action={handel_Delete}/>
            )}
        {openSnackbaredialog && (
                <Snackbar open={openSnackbaredialog} onClose={()=>{setOpenSnackbaredialog(false)}} message={'the appointment has been deleted successfully ✅'} />
        )}
        {opensnackbareforeditstatus && (
                <Snackbar open={opensnackbareforeditstatus} onClose={()=>{setOpensnackbareforeditstatus(false)}} message={'the label has been edited successfully ✅'} />
        )}
        {openEditLabelDialog && (
            <EditLabelDialog open={openEditLabelDialog} onClose={()=>{setOpenEditLabelDialog(false)}} status={statustypes} statuschosed={statuschosed} action={handel_edit_label} data={setData_edit_label}/>
        )
        }

    </div>
  );
};
