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

  handleSelectedLocation = city => {
    console.log(`handleSelectedLocation ${city}`)
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <LocationList cities={cities}
            onSelectedLocation={this.handleSelectedLocation}></LocationList>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App
