import React, { useState } from 'react';
import './addUser.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { addUser } from '../redux/action';
import { useDispatch } from 'react-redux';

const AddUser = () => {

  const styles = {
    Button: {
      width: '1px',
      backgroundColor: 'rgb(21, 67, 109)',
      color: 'white',
      marginTop: '20px',
      '&:hover': {
        backgroundColor: 'rgb(21, 67, 109)', // Change the background color on hover
      },
    },
    backButton: {
      width: '100px',
      backgroundColor: 'rgb(119, 16, 38)',
      marginBottom: '30px',
      '&:hover': {
        backgroundColor: 'rgb(119, 16, 38)', // Change the background color on hover
      },
    }
  };

  const [state, setState] = useState({
    name: "",
    email: "",
    address: "",
    contact: ""
  })

  const [error, setError] = useState("")
  const dispatch = useDispatch()
  const navigate = useNavigate();


  const { name, email, address, contact } = state


  const handleChangeInput = (e) => {
    let { name, value } = e.target
    setState({
      ...state, [name]: value
    });
    console.log(state)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !address || !contact) {
      setError("Please fill all the input fields")
      console.log(error)
    }
    else {
      dispatch(addUser(state));
      navigate('/home');
      setError("")
    }
  }

  const goToHome = () => {
    navigate('/home')
  }

  return (
    <div className='container'>

      <Button variant="contained" sx={styles.backButton} onClick={() => goToHome()}>Back</Button>
      <h1 style={{ marginBottom: 20 }}>Add User</h1>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <form onSubmit={handleSubmit}>
        <Box
          sx={{
            '& > :not(style)': { m: 1, },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="standard-basic"
            label="Name"
            variant="standard"
            value={state.name}
            name="name"
            onChange={handleChangeInput}
            sx={{ width: '45ch' }}
          /> <br />

          <TextField
            id="standard-basic"
            label="Email"
            variant="standard"
            value={state.email}
            name="email"
            onChange={handleChangeInput}
            sx={{ width: '45ch' }}
          /><br />

          <TextField
            id="standard-basic"
            label="Address"
            variant="standard"
            value={state.address}
            name="address"
            onChange={handleChangeInput}
            sx={{ width: '45ch' }}
          /><br />

          <TextField
            id="standard-basic"
            label="Contact"
            variant="standard"
            value={state.contact}
            name="contact"
            onChange={handleChangeInput}
            sx={{ width: '45ch' }}
          /><br />
          <Button variant="contained" type='submit' sx={{ width: '20ch' }} >Submit</Button>
        </Box><br />
      </form>

    </div>
  )
}

export default AddUser
