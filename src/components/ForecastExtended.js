import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './styles.css'

import ForecastItem from './ForecastItem'

export default class ForecastExtended extends Component {
  render() {
    const { city } = this.props
    return(
      <div>
        <h2 className='forecast-title'>
          Pronostico extendido para {city}
        </h2>
        <ForecastItem></ForecastItem>
      </div>
    )
  }
}

ForecastExtended.propTypes = {
  city: PropTypes.string.isRequired
}