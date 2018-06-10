import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './styles.css'

import ForecastItem from './ForecastItem'

const days = [
  'Lunes',
  'Martes',
  'Miercoles',
  'Jueves',
  'Viernes'
]

export default class ForecastExtended extends Component {
  state = {
    forecastData: null
  }
  
  renderForecastItemDays(days) {
    return 'Render Items'
    // return days.map( day => <ForecastItem weekDay={day} hour={10}></ForecastItem>)
  }

  renderProgress = () => {
    return <h3>Cargando Pronóstico extendido...</h3>
  }

  render() {
    const { city } = this.props
    const { forecastData } = this.state
    return(
      <div>
        <h2 className='forecast-title'>Pronostico extendido para {city}</h2>
        { 
         forecastData ?
          this.renderForecastItemDays(days)
          : this.renderProgress()
        }
      </div>
    )
  }
}

ForecastExtended.propTypes = {
  city: PropTypes.string.isRequired
}