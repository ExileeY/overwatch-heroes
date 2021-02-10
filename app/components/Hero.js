import React from 'react'
import queryString from 'query-string'
import { fetchHero } from '../utils/api'
import Card from './Card'
import CardList from './CardList'
import HeroInfo from './HeroInfo'
import Loading from './Loading'

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
          ? <Loading text='Loading Hero'/>
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
              <HeroInfo 
                about={hero.description}
                abilities={hero.abilities}
                backStory={hero.story.backStory}
              />
            </React.Fragment>
        }
      </React.Fragment>
    )
  }
}