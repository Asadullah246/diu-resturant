import { useState } from 'react'
import { Toaster } from 'react-hot-toast'
import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home/Home'
import Login from './pages/login/Login'
import Navbar from './components/Navbar/Navbar'
import Signup from './pages/Signup/Signup'


function App() {


  return (
    <div >
      <Navbar/>
      <Routes>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/sign-up' element={<Signup/>}></Route>
        <Route path='/' element={<Home></Home>}></Route>
      </Routes>
      <Toaster/>
    </div>
  )
}

export default App
