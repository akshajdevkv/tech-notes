import { useState } from 'react'
import {Routes,Route} from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import Login from './features/auth/Login'
import Public from './components/Public'
import DashLayout from './components/DashLayout'
function App() {
  return (
    <Routes>  
      <Route path='/' element={<Layout />} >
        <Route index element={<Public />} />
        <Route path='login' element={<Login />} />
        <Route path='dash' element={<DashLayout />} >
          <Route index element={<Welcome />} />
         <Route path='notes'>
          <Route index element={<NotesList />} />
         </Route>
          <Route path='users'>
          <Route index element={<UsersList />} />
         </Route>
        </Route>
      </Route>
    </Routes>
  )
}

export default App
