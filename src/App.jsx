
import './App.css'
import UserInformation from './pages/Home'
import InfoEditForm from './pages/InfoEditForm'
import { Routes, Route } from 'react-router-dom'

function App() {
  

  return (
    <Routes>
      <Route path='/' element={<UserInformation/>} />
      <Route path='/form' element={<InfoEditForm/>} />
    </Routes>
  )
}

export default App
