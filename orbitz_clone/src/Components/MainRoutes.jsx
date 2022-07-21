import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import { Login } from '../Pages/Login/Login'
import IndiProduct from "../Pages/IndividualProduct/IndiProduct"


const MainRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<IndiProduct/>}/>
        <Route path="/login" element={<Login/>}/>
    </Routes>
  )
}

export default MainRoutes