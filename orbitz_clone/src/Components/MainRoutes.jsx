import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import { Login } from '../Pages/Login/Login'


const MainRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
    </Routes>
  )
}

export default MainRoutes