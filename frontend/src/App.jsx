import React from 'react'
import { Routes, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import About from './pages/About'
import MyAppoinment from './pages/MyAppoinment'
import Appoinment from './pages/Appoinment'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/doctors' element={<Doctors />} />
        <Route path='/doctors/:speciality' element={<Doctors />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/my-profile' element={<MyProfile />} />
        <Route path='/MyAppoinment' element={<MyAppoinment />} />
        <Route path='/appoinment/:docId' element={<Appoinment />} />
      </Routes>
    </div>
  )
}

export default App
