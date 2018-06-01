import React from 'react'
import WeatherTemperature from './WeatherTemperature'
import WeatherExtraInfo from './WeatherExtraInfo'
import {
  // CLOUD,
  // CLOUDY,
  // SUN,
  // RAIN,
  SNOW,
  // WINDY
} from './../../../constants/weathers'

const WeatherData = () => (
  <div>
    <WeatherTemperature temperature={20} weatherState={ SNOW }/>
    <WeatherExtraInfo humidity={80} wind={'10 m/s'}/>
  </div>
)

export default WeatherData