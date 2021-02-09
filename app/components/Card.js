import React from 'react'
import PropTypes from 'prop-types'
import { GiCrossedSwords, GiHeartBeats, GiMailedFist } from 'react-icons/gi'

export default function Card({heroName, role, portrait}) {
  return (
    <div className='card bg-dark'>
      <img 
        alt={`Image for ${heroName}`}
        src={portrait}
        className='avatar'
      />
      <h2 className='center-text'>{heroName}</h2>
      <ul className='card-list'>
        <li>
          {role === 'damage'
            ? <GiCrossedSwords size={20} color='#808284'/>
            : role === 'support'
              ? <GiHeartBeats size={20} color='rgb(220,20,60)'/>
              : <GiMailedFist size={20} color='rgb(218,165,32)'/>
          }
          {role}
        </li>
      </ul>
    </div>
  )
}

Card.propTypes = {
  heroName: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  portrait: PropTypes.string.isRequired
}