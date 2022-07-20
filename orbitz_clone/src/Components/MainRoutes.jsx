import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Searchbar } from '../Pages/Product/Searchbar'

const MainRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<h1 style={{textAlign:"center"}}>Orbitz Clone</h1>}/>
        <Searchbar/>
    </Routes>
  )
}

export default MainRoutes