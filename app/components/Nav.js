import React from 'react'
import { NavLink } from 'react-router-dom'
import { ThemeConsumer } from '../contexts/theme'

export default function Nav() {
  return (
    <ThemeConsumer>
      {({theme, toggleTheme}) => (
        <nav className="row space-between">
          <ul className="row nav">
            <li><NavLink className="nav-link" exact to='/' activeStyle={{color: 'rgb(155, 35, 53)'}}>All</NavLink></li>
            <li><NavLink className="nav-link" exact to='/heroes/damagers?role=damage' activeStyle={{color: 'rgb(155, 35, 53)'}}>Damagers</NavLink></li>
            <li><NavLink className="nav-link" exact to='/heroes/supports?role=support' activeStyle={{color: 'rgb(155, 35, 53)'}}>Supports</NavLink></li>
            <li><NavLink className="nav-link" exact to='/heroes/tanks?role=tank' activeStyle={{color: 'rgb(155, 35, 53)'}}>Tanks</NavLink></li>
          </ul>
          <button 
            style={{fontSize: 30}}
            className='btn-clear'
            onClick={toggleTheme}
          >
            {theme === 'light' ? '🔦' : '💡'}
          </button>
        </nav>
      )}
    </ThemeConsumer>
  )  
}