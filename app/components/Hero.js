import React from 'react'
import queryString from 'query-string'
import { fetchHero } from '../utils/api'
import Card from './Card'
import CardList from './CardList'

export default class Hero extends React.Component {
  state = {
    hero: null,
    error: null,
    loadingHero: true
  }

  componentDidMount() {
    const { id } = queryString.parse(this.props.location.search)

    fetchHero(id)
      .then((hero) => {
        this.setState({
          hero,
          loadingHero: false
        })
      })
      .catch(({ message }) => {
        this.setState({
          error: message,
          loadingHero: false
        })
      })
  }

  render() {
    const {hero, error, loadingHero} = this.state

    if (error) {
      return <p className='center-text'>{error}</p>
    }
    
    return (
      <React.Fragment>
        {loadingHero === true
          ? <h1 className='center-text'>Loading</h1>
          : <React.Fragment>
              <div className='center-hr'>
                <Card 
                  heroName={hero.name}
                >
                  <CardList 
                    role={hero.role}
                    difficulty={hero.difficulty}
                    age={hero.age}
                    realName={hero.story.biography.realName}
                    occupation={hero.story.biography.occupation}
                    affiliation={hero.story.biography.affiliation}
                  />
                </Card>
              </div>
              <div>
                <h1 className='center-text'>More info</h1>
                <section>
                  <h2>Description</h2>
                  <p>{hero.description}</p>
                </section>
                <section>
                  <h2>Abilities</h2>
                  <ul>
                    {hero.abilities.map(({name: abilityName, description}) => {
                      return (<li key={abilityName}>{abilityName}</li>)
                    })}
                  </ul>
                </section>
                <section>
                  <h2>Back Story</h2>
                  <p>{hero.story.backStory}</p>
                </section>
              </div>
            </React.Fragment>
        }
      </React.Fragment>
    )
  }
}