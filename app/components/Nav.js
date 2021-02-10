import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav() {
  return (
    <nav className="row space-between">
      <ul className="row nav">
        <li><NavLink className="nav-link" exact to='/' activeStyle={{color: 'rgb(155, 35, 53)'}}>All</NavLink></li>
        <li><NavLink className="nav-link" exact to='/heroes/damagers?role=damage' activeStyle={{color: 'rgb(155, 35, 53)'}}>Damagers</NavLink></li>
        <li><NavLink className="nav-link" exact to='/heroes/supports?role=support' activeStyle={{color: 'rgb(155, 35, 53)'}}>Supports</NavLink></li>
        <li><NavLink className="nav-link" exact to='/heroes/tanks?role=tank' activeStyle={{color: 'rgb(155, 35, 53)'}}>Tanks</NavLink></li>
      </ul>
    </nav>
  )  
}