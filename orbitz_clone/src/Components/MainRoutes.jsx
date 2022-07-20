import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
<<<<<<< HEAD
=======
import { Login } from '../Pages/Login/Login'
>>>>>>> master

const MainRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
<<<<<<< HEAD
=======
        <Route path="/login" element={<Login/>}/>
>>>>>>> master
    </Routes>
  )
}

export default MainRoutes