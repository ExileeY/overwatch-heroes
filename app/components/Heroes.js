import React from 'react'
import { fetchHeroes } from '../utils/api'
import Card from './Card'
import queryString from 'query-string'

export default class Heroes extends React.Component {
  state = {
    heroes: null,
    loadingHeroes: true,
    error: null
  }

  componentDidMount() {
    this.updateHeroes()
  }

  componentDidUpdate(prevProps) {
    if (prevProps.location.search !== this.props.location.search) {
      this.updateHeroes()
    }
  }

  updateHeroes = () => {
    const { role } = queryString.parse(this.props.location.search)
    
    this.setState({
      heroes: null,
      error: null,
      loadingHeroes: true
    })
    fetchHeroes(role)
      .then((heroes) => this.setState({ heroes, loadingHeroes: false }))
      .catch(({ message }) => this.setState({ error: message, loadingHeroes: false }))
  }

  render() {
    const { heroes, loadingHeroes, error } = this.state
    if (error) {
      return <p className='center-text'>{error}</p>
    }
    
    return (
      <React.Fragment>
        {loadingHeroes === true 
          ? <h1 className='center-text'>Loading</h1>
          : <React.Fragment>
              <h1 className='center-text'>Heroes</h1>
              <ul className='grid space-around'>
                {heroes.map(({ key, name: heroName, role, portrait }) => {
                  return (
                    <li key={key}>
                      <Card 
                        id={key}
                        heroName={heroName}
                        portrait={portrait}
                      />
                    </li> 
                  )
                })}
              </ul>
            </React.Fragment>
        }
      </React.Fragment>
    )
  }
}