import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Heroes from './components/Heroes'
import Nav from './components/Nav'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Hero from './components/Hero'
import NotFoundPage from './components/NotFoundPage'

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className='container'>
          <Nav />
          <Switch>
            <Route exact path='/' component={Heroes}/>
            <Route exact path='/heroes/:sortId' component={Heroes}/>
            <Route path="/hero" component={Hero}/>
            <Route render={() => <NotFoundPage/>}/>
          </Switch>
        </div>
      </Router>
    )
  }
}

const root = document.getElementById('root')
ReactDOM.render(<App />, root)