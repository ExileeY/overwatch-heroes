import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Heroes from './components/Heroes'

class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <Heroes />
      </div>
    )
  }
}

const root = document.getElementById('root')
ReactDOM.render(<App />, root)