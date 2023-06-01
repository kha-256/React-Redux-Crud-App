import React, { useEffect } from "react";
import './Home.css'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, loadUsers } from "../redux/action";


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));



function Home() {
{/*const navigate= useNavigate();

const goToAddUser=()=>{
navigate('/addUser')
}
*/}

const styles = {
  button: {
    backgroundColor: 'rgb(230, 90, 90)',
    marginRight: '5px',
    '&:hover': {
      backgroundColor: 'rgb(230, 90, 90)', // Change the background color on hover
    },
    
    
  },

  addButton:{
    backgroundColor: 'rgb(21, 67, 109)',
    marginTop: '20px',
    '&:hover': {
      backgroundColor: 'rgb(21, 67, 109)', // Change the background color on hover
    },
  }
};


let dispatch = useDispatch();

const {users} = useSelector(state=> state.users)

useEffect(()=>{
  dispatch(loadUsers());
},[])


const handleDelete=(id)=>{
  if(window.confirm("Are you sure, you want to delete the user")){
    dispatch(deleteUser(id))
  }

}


const navigate= useNavigate();

const goToAddUser=()=>{
navigate('/addUser')
}
  return (
    <div className="container">
      <h2 >User Information</h2>

      <Button variant="contained" sx={styles.addButton} onClick={()=>{goToAddUser()}} >Add User</Button>
      <TableContainer  component={Paper} sx={{ marginTop:5,minWidth:1100}}>
        <Table sx={{ minWidth: 900,  }} aria-label="customized table">
          <TableHead>
            <TableRow>
            <StyledTableCell >Name</StyledTableCell>
              <StyledTableCell align="center">Email</StyledTableCell>
              <StyledTableCell align="center">Contact</StyledTableCell>
              <StyledTableCell align="center">Address</StyledTableCell>
              <StyledTableCell align="center">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users && users.map((user) => (
              <StyledTableRow key={user.id}>
                <StyledTableCell component="th" scope="row">
                  {user.name}
                </StyledTableCell>
                <StyledTableCell align="center">{user.email}</StyledTableCell>
                <StyledTableCell align="center">{user.contact}</StyledTableCell>
                <StyledTableCell align="center">{user.address}</StyledTableCell>
                <StyledTableCell align="center">
                <ButtonGroup variant="contained" aria-label="outlined primary button group">
      <Button sx={styles.button} onClick={()=> handleDelete(user.id)}>Delete</Button>
      <Button color="primary">Edit</Button>
    </ButtonGroup>
                </StyledTableCell>

                
              </StyledTableRow>
            ))}
          </TableBody> 
        </Table>
      </TableContainer>
    </div>

  )
}

export default Home