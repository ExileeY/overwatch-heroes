import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Heroes from './components/Heroes'
import Nav from './components/Nav'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Hero from './components/Hero'

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className='container'>
          <Nav />
          <Route exact path='/' component={Heroes}/>
          <Route exact path='/heroes/:sortId' component={Heroes}/>
          <Route path="/hero" component={Hero}/>
      ` </div>
      </Router>
    )
  }
}

const root = document.getElementById('root')
ReactDOM.render(<App />, root)