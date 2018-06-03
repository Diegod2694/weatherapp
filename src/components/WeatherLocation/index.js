import React, { Component } from 'react'
import CircularProgess from 'material-ui/CircularProgress'
import Location from './Location'
import WeatherData from './WeatherData'
import transformWeather from './../../services/transformWeather'

import './styles.css'

const location  = 'Buenos Aires,ar'
const api_key = 'b229552c29857c4b843acf9d34e2634f'
const api_weather = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${api_key}`

export default class WeatherLocation extends Component {
  state={ 
      city: 'Buenos Aires',
      data: null
    }

  handleUpdateClick = () => {
    fetch(api_weather).then(data => {
      console.log(data)
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