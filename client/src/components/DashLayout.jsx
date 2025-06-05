import React from 'react'
import DashHeader from './DashHeader'
import DashFooter from './DashFooter'
const DashLayout = () => {
  return (
    <main className="dash-container">
      <DashHeader />
      <Outlet />
      <DashFooter />
    </main>
  )
}

export default DashLayout