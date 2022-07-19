import React from 'react'
import { Route, Routes } from 'react-router-dom'

const MainRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<h1 style={{textAlign:"center"}}>Orbitz Clone</h1>}/>
    </Routes>
  )
}

export default MainRoutes