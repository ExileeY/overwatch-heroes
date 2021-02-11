import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFoundPage () {
  return (
    <div className='not-found center-text'>
      <h1>404</h1>
      <Link className='link' to='/'>Go Home → 🏠</Link>
    </div>
  )
}