import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { Grid, Row, Col } from 'react-flexbox-grid'
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
        <Grid>
          <Row>
            Titulo
          </Row>
          <Row>
            <Col xs={12} md={6}>
              <LocationList cities={cities}
                onSelectedLocation={this.handleSelectedLocation}></LocationList>
            </Col>
            <Col xs={12} md={6}>
              <div className="detail"></div>
            </Col>
          </Row>
        </Grid>
      </MuiThemeProvider>
    )
  }
}

export default App
