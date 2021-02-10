import React from 'react'
import { GiLifeInTheBalance, GiAges, GiCrossedSwords, GiHeartBeats, GiMailedFist } from 'react-icons/gi'
import { difficultyStars } from '../utils/helpers'

export default function CardList ({role, difficulty, age, realName, occupation, affiliation}) {
  return (
    <ul className='card-list'>
      <li>
        {role === 'Damage'
          ? <GiCrossedSwords size={20} color='#808284'/>
          : role === 'Support'
            ? <GiHeartBeats size={20} color='rgb(220,20,60)'/>
            : <GiMailedFist size={20} color='rgb(218,165,32)'/>
        }
        {role}
      </li>
      <li>
        <GiLifeInTheBalance size={20} color='#6e6d70'/>
        Difficulty: {difficultyStars(difficulty)}
      </li>
      {age && (
        <li>
          <GiAges size={20}/>
          Age: {age}
        </li>
      )}
      {realName && (
        <li>
          Real name: {realName}
        </li>
      )}
      <li>
        Occupation: {occupation}
      </li>
      <li>
        Affiliation: {affiliation}
      </li>
    </ul>
  )
}