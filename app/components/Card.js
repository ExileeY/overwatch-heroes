import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { ThemeConsumer } from '../contexts/theme'

export default function Card({id, heroName, portrait, children}) {
  return (
    <ThemeConsumer>
      {({ theme }) => (
        <div className={`card bg-${theme}`}>
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
      )}
    </ThemeConsumer>
  )
}

Card.propTypes = {
  id: PropTypes.string,
  heroName: PropTypes.string.isRequired,
  portrait: PropTypes.string
}