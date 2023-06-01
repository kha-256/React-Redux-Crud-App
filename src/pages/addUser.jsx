import React from 'react';
import './addUser.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const AddUser = () => {

  const styles = {
    Button:{
      width: '250px',
      backgroundColor: 'rgb(21, 67, 109)',
      marginTop: '20px',
      '&:hover': {
        backgroundColor: 'rgb(21, 67, 109)', // Change the background color on hover
      },
    }
  };
  return (
    <div className='container'>
      <h1 style={{marginBottom:20}}>Add User</h1>
      <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '45ch', display:'flex', flexDirection:'column' ,marginLeft:'auto', marginRight:'auto',paddingBottom:1},
      }}
      noValidate
      autoComplete="off"
    >
      
      <TextField id="standard-basic" label="Name" variant="standard" />
      <TextField id="standard-basic" label="Email" variant="standard" />
      <TextField id="standard-basic" label="Contact" variant="standard" />
      <TextField id="standard-basic" label="Address" variant="standard" />
    </Box>

    <Button variant="contained" sx={styles.Button} >Add User</Button>
    </div>
  )
}

export default AddUser
