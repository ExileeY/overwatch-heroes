import React from 'react'
import { Link } from 'react-router-dom'
import { ThemeConsumer } from '../contexts/theme'

const styles = {
  header: {
    fontWeight: 'bold',
    fontSize: '100px',
    padding: '50px 0'
  }
}

export default function NotFoundPage () {
  return (
    <ThemeConsumer>
      {({ theme }) => (
        <div 
          style={{
            background: theme === 'light' ? 'rgba(0,0,0,0.08)' : 'rgb(42,44,45)',
            borderRadius: '5px',
            height: '390px'
          }}
          className='center-text'
        >
          <h1 style={styles.header}>404</h1>
          <Link className='link' to='/'>Go Home → 🏠</Link>
        </div>
      )}
    </ThemeConsumer>
  )
}