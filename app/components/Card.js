import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Card({id, heroName, portrait, children}) {
  return (
    <div className='card bg-light'>
      {portrait && (
        <img 
          alt={`Image for ${heroName}`}
          src={portrait}
          className='avatar'
        />
      )}
      <h2 className='center-text'>
        {id ? <Link className='link' to={`/hero?id=${id}`}>{heroName}</Link> : heroName}
      </h2>
      {children}
    </div>
  )
}

Card.propTypes = {
  id: PropTypes.string,
  heroName: PropTypes.string.isRequired,
  portrait: PropTypes.string
}