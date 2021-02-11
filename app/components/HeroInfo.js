import React from 'react'
import PropTypes from 'prop-types'
import { ThemeConsumer } from '../contexts/theme'

export default function HeroInfo ({about, abilities, backStory}) {
  return (
    <ThemeConsumer>
      {({ theme }) => (
        <div className={`hero-info hero-info-${theme}-bg`}>
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
                  <li key={name}>
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
      )}
    </ThemeConsumer>
  )
}

HeroInfo.propTypes = {
  about: PropTypes.string.isRequired,
  abilities: PropTypes.array.isRequired,
  backStory: PropTypes.string.isRequired
}