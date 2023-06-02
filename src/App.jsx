import './App.css'
import AddUser from './pages/addUser'
import Home from './pages/Home'
import EditUser from './pages/EditUser'
import { Routes, Route } from 'react-router-dom'

function App() {


  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path='/addUser' element={<AddUser />} />
      <Route path='/EditUser/:id' element={<EditUser />} />
    </Routes>
  )
}

export default App
