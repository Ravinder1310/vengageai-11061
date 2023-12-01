import React from 'react';
import { Route, Routes } from "react-router-dom"
import HomePage from './HomePage';
import EditContacts from './EditContacts';
import CreateContact from './CreateContact';


const MainRoutes = () => {
  return (
    <Routes>
            <Route path='/'element={<HomePage/>}/>
            <Route path='/contact/:id/edit'element={<EditContacts/>}/>
            <Route path='/contact/create'element={<CreateContact/>}/>
            <Route path='/*'element={<h3>Page Not Found</h3>}/>
    </Routes>
  )
}

export default MainRoutes