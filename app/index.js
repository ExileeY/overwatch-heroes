import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Nav from './components/Nav'
import Loading from './components/Loading'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import NotFoundPage from './components/NotFoundPage'
import { ThemeProvider } from './contexts/theme'

const Heroes = React.lazy(() => import('./components/Heroes'))
const Hero = React.lazy(() => import('./components/Hero'))

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
              <React.Suspense fallback={<Loading />}>
                <Switch>
                  <Route exact path='/' component={Heroes}/>
                  <Route exact path='/heroes/:sortId' component={Heroes}/>
                  <Route exact path="/hero" component={Hero}/>
                  <Route render={() => <NotFoundPage/>}/>
                </Switch>
              </React.Suspense>
            </div>
          </div>
        </ThemeProvider>
      </Router>
    )
  }
}

const root = document.getElementById('root')
ReactDOM.render(<App />, root)