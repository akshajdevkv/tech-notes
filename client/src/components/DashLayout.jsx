import React from 'react'
import { Outlet } from 'react-router-dom'
import DashHeader from './DashHeader'
import DashFooter from './DashFooter'

const DashLayout = () => {
  return (
    <>
      <div className="dash-container">
        <Outlet />
      </div>
    </>
  )
}

export default DashLayout