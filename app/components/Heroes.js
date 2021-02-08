import React from 'react'
import { fetchAllHeroes } from '../utils/api'
import { GiCrossedSwords, GiHeartBeats, GiMailedFist } from 'react-icons/gi'

export default class Heroes extends React.Component {
  state = {
    heroes: null,
    loadingHeroes: true,
    error: null
  }

  componentDidMount() {
    this.setState({
      heroes: null,
      error: null,
      loadingHeroes: true
    })
    fetchAllHeroes()
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
                      <div className='card bg-dark'>
                        <img 
                          alt={`Image for ${heroName}`}
                          src={portrait}
                          className='avatar'
                        />
                        <h2 className='center-text'>{heroName}</h2>
                        <div className='center-content center-items'>
                          {role === 'damage'
                            ? <GiCrossedSwords size={20} color='#808284'/>
                            : role === 'support'
                              ? <GiHeartBeats size={20} color='rgb(220,20,60)'/>
                              : <GiMailedFist size={20} color='rgb(218,165,32)'/>
                          }
                          <h4>{role}</h4>
                        </div>
                      </div>
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