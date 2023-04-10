import { useState } from 'react'
import { Toaster } from 'react-hot-toast'
import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home/Home'
import Login from './pages/login/Login'
import Navbar from './components/Navbar/Navbar'
import Signup from './pages/Signup/Signup'
import Singleproduct from './pages/SingleProduct/Singleproduct'


function App() {


  return (
    <div >
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/sign-up' element={<Signup/>}></Route>
        <Route path='/products/:id' element={<Singleproduct></Singleproduct>}></Route>
      </Routes>
      <Toaster/>
    </div>
  )
}

export default App
