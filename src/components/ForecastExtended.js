import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ForecastItem from './ForecastItem'
import transformForecast from './../services/transformForecast'
import './styles.css'

const url = 'http://api.openweathermap.org/data/2.5/forecast'
const api_key = 'b229552c29857c4b843acf9d34e2634f'

export default class ForecastExtended extends Component {
  state = {
    forecastData: null
  }
  
  componentDidMount() {
    const { city } = this.props
    this.updateCity(city)
  }

  componentWillReceiveProps = (nextProps) => {
    const { city } = this.props    
     if (nextProps.city !== city) {
       this.setState({ forecastData: null })
       this.updateCity(nextProps.city)
     }
  }
  

  updateCity = city => {
    const url_forecastData = `${url}?q=${city}&appid=${api_key}`

    fetch(url_forecastData).then(
      data => data.json()
    ).then(
      weather_data => {
        console.log(weather_data)
        const forecastData = transformForecast(weather_data)
        console.log('forecastData', forecastData)
        this.setState({ forecastData })
      }
    )
  }

  renderForecastItemDays(forecastData) {
    return forecastData.map( forecast => (
      <ForecastItem
        key={`${forecast.weekDay}${forecast.hour}`}
        weekDay={forecast.weekDay}
        hour={forecast.hour}
        data={forecast.data}></ForecastItem>
    ))
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
          this.renderForecastItemDays(forecastData)
          : this.renderProgress()
        }
      </div>
    )
  }
}

ForecastExtended.propTypes = {
  city: PropTypes.string.isRequired
}