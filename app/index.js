import React from 'react'
import RenderDOM from 'react-dom'

class App extends React.Component {
  render() {
    return <h1>APP</h1>
  }
}

const root = document.getElementById('root')
RenderDOM(<App />, root)