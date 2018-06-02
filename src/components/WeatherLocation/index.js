import React, { Component } from 'react'
import Location from './Location'
import WeatherData from './WeatherData'
// import transformWeather from './../../services/transformWeather'
import { SUN } from './../../constants/weathers'

import './styles.css'

// const location  = 'Buenos Aires,ar'
// const api_key = 'b229552c29857c4b843acf9d34e2634f'
// const api_weather = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${api_key}`

const data1 = {
  temperature: 20,
  weatherState: SUN,
  humidity: 10,
  wind: '10 m/s'
}

const data2 = {
  temperature: 20,
  weatherState: SUN,
  humidity: 10,
  wind: '10 m/s'
}
class WeatherLocation extends Component {
  constructor (props) {
    super(props)
    this.state={ 
      city: 'Buenos Aires',
      data: data1
    }
    console.log('constructor');
  }
  
  componentWillMount () {
    console.log('componentWillMount');
  }
  
  componentDidMount () {
    console.log('componentDidMount');
  }
  
  componentWillUpdate () {
    console.log('componentWillUpdate');
  }

  componentDidUpdate () {
    console.log('componentDidUpdate');
  }
   
  handleUpdateClick = () => {
    console.log('actualizado');
    this.setState({
      date: data2
    })
  }

  render = () => {
    console.log('render');
    
    const { city, data } = this.state
    return (
      <div className='weatherLocationCont'>
        <Location city={city} />
        <WeatherData data={data}/>
        <button onClick={this.handleUpdateClick}>Actualizar</button>
      </div>
    )
  }
}

export default WeatherLocation