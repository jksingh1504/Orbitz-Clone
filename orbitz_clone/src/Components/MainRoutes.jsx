import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import { Login } from '../Pages/Login/Login'
import { Signup } from '../Pages/Signup/Signup'
import IndiProduct from "../Pages/IndividualProduct/IndiProduct"
import Footer from './Footer/Footer'
import { LandingPage } from './Index/LandingPage'


const MainRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
    </Routes>
  )
}

export default MainRoutes