import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Heroes from './components/Heroes'
import Nav from './components/Nav'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Hero from './components/Hero'
import NotFoundPage from './components/NotFoundPage'
import { ThemeProvider } from './contexts/theme'

class App extends React.Component {
  state = {
    theme: 'light',
    toggleTheme: () => {
      this.setState(({ theme }) => ({
        theme: theme === 'light' ? 'dark' : 'light'
      }))
    }
  }
  render() {
    return (
      <Router>
        <ThemeProvider value={this.state}>
          <div className={this.state.theme}>
            <div className='container'>
              <Nav />
              <Switch>
                <Route exact path='/' component={Heroes}/>
                <Route exact path='/heroes/:sortId' component={Heroes}/>
                <Route path="/hero" component={Hero}/>
                <Route render={() => <NotFoundPage/>}/>
              </Switch>
            </div>
          </div>
        </ThemeProvider>
      </Router>
    )
  }
}

const root = document.getElementById('root')
ReactDOM.render(<App />, root)