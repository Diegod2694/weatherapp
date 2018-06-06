import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CircularProgess from 'material-ui/CircularProgress'
import Location from './Location'
import WeatherData from './WeatherData'
import transformWeather from './../../services/transformWeather'
import './styles.css'

const url = 'http://api.openweathermap.org/data/2.5/weather'
const api_key = 'b229552c29857c4b843acf9d34e2634f'

export default class WeatherLocation extends Component {
  constructor ({ city }) {
    super()
    this.state = { 
        city,
        data: null
      }
  }

  handleUpdateClick = () => {
    const { city } = this.state
    const api_weather = `${url}?q=${city}&appid=${api_key}`
    fetch(api_weather).then(data => {
      return data.json()
    }).then( weather_data => {
      const data = transformWeather(weather_data)
      this.setState({ data })
    })
  }

  componentWillMount () {
    this.handleUpdateClick()
  }

  render() {
    const { city, data } = this.state
    return (
      <div className='weatherLocationCont'>
        <Location city={city} />
        {
          data ? <WeatherData data={data} /> 
          : <CircularProgess size={60} thickness={7} />
        }
      </div>
    )
  }
}

WeatherLocation.propTypes = {
  city: PropTypes.string
}