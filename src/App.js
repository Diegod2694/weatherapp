import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import LocationList from './components/LocationList'
import './App.css'

const cities = [
  'Buenos Aires,ar',
  'Bogota,col',
  'Ciudad de México,mx',
  'Madrid,es',
]

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <LocationList cities={cities}></LocationList>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App
