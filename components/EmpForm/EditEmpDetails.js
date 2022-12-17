import { ThemeProvider, createTheme } from '@mui/material';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { designations } from '../constants';

const theme = createTheme()
const EditEmpDetails = ({empDetails}) => {
    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        let response;
        try {
            response = await fetch(`/api/employee/${empDetails.data._id}`,{
                method:'PUT',
                body:JSON.stringify({
                    firstName: data.get('firstName'),
                    lastName: data.get('lastName'),
                    email: data.get('email'),
                    empCode: data.get('empcode'),
                    dateOfJoining:data.get('date'),
                    gender: data.get('gender'),
                    designation: data.get('designation'),
                    address: data.get('address')
                }),
                headers: {
                    'Content-Type': 'application/json',
                  },
            })
            if(response && response.status === 200) {
                window.location.replace('/viewallEmp')
            }
        } catch(err) {
            console.log('Error in creating new emp','err')
        }
    };

    return (
        <ThemeProvider theme={theme}>
            <Container component='main' maxWidht="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <BusinessOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        New Employee
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="given-name"
                                    name="firstName"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    autoFocus
                                    defaultValue={empDetails.data.firstName || ''}
                                    
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
                                    autoComplete="family-name"
                                    defaultValue={empDetails.data.lastName || ''}
                                    
                                />
                            </Grid>
                            <Grid item xs={12} >
                                <TextField
                                    required
                                    // fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    sx={{ minWidth: 570 }}
                                    defaultValue={empDetails.data.email || ''}
                                />
                                <TextField
                                    required
                                    // fullWidth
                                    id="empcode"
                                    label="Employee Code"
                                    name="empcode"
                                    // autoComplete="email"
                                    sx={{ minWidth: 568 }}
                                    style={{ marginLeft: '14px' }}
                                    defaultValue={empDetails.data.empCode}
                                    
                                />
                            </Grid>
                            <Grid item xs={12} >
                                <TextField
                                    required
                                    // fullWidth
                                    id="date"
                                    type="date"
                                    name='date'
                                    InputLabelProps={{ shrink: true, required: true }}
                                    label="Date of Joining"
                                    style={{ marginRight: '30px' }}
                                    defaultValue={empDetails.data.dateOfJoining.split('T')[0]}
                                    
                                />
                                <FormControl sx={{ minWidth: 250 }}  >
                                    <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        label="Gender"
                                        name='gender'
                                        defaultValue={empDetails.data.gender}
                                    >
                                        <MenuItem value='male'>Male</MenuItem>
                                        <MenuItem value='female'>Female</MenuItem>
                                    </Select>
                                </FormControl>
                                <FormControl sx={{ minWidth: 250 }} style={{ marginLeft: '30px' }}>
                                    <InputLabel id="demo-simple-select-label1">Desgination</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select1"
                                        label="Desgination"
                                        name='designation'
                                        defaultValue={empDetails.data.designation}
                                    >
                                        {designations && designations.map(item => {
                                            return (
                                                <MenuItem value={item}>{item}</MenuItem>
                                            )
                                        })}
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="address"
                                    label="Full Address"
                                    name="address"
                                    autoComplete="address"
                                    multiline
                                    defaultValue={empDetails.data.address}
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Update
                        </Button>
                    </Box>
                </Box>
            </Container>

        </ThemeProvider>
    )
}

export default EditEmpDetails;
