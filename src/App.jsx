import './App.css'
import AddUser from './pages/addUser'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'

function App() {
  

  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path="/home" element={<Home />} />
      <Route path='/AddUser' element={<AddUser/>} />
    </Routes>
  )
}

export default App
