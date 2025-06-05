import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHouse} from '@fortawesome/free-solid-svg-icons'
import {useNavigate,useLocation} from 'react-router-dom'

const DashFooter = () => {
  return (
    <footer className="dash-footer">
      <p>Current User:</p>
      <p>Status:</p>
    </footer>
  )
}

export default DashFooter