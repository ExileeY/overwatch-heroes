import React from 'react'
import PropTypes from 'prop-types'

export default function HeroInfo ({about, abilities, backStory}) {
  return (
    <div className='hero-info'>
      <h1 className='center-text'>More info</h1>
      <section>
        <h2>Description</h2>
        <p>{about}</p>
      </section>
      <section>
        <h2>Abilities</h2>
        <ul>
          {abilities.map(({name, description}) => {
            return (
              <li className='ability' key={name}>
                <h4>{name}</h4>
                <p>{description}</p>
              </li>
            )
          })}
        </ul>
      </section>
      <section>
        <h2>Back Story</h2>
        <p>{backStory}</p>
      </section>
    </div>
  )
}

HeroInfo.propTypes = {
  about: PropTypes.string.isRequired,
  abilities: PropTypes.array.isRequired,
  backStory: PropTypes.string.isRequired
}