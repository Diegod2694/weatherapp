import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { setSelectedCity } from './../actions'
import LocationList from './../components/LocationList'

class LocationListContainer extends Component {
  static propTypes = {
    setSelectedCity: PropTypes.func.isRequired,
    cities: PropTypes.array.isRequired,
  }

  handleSelectedLocation = city => {
    this.props.setSelectedCity(city)
  }

  render() {
    return (
      <LocationList cities={this.props.cities}
                onSelectedLocation={this.handleSelectedLocation}></LocationList>
    )
  }
}

const mapDispatchToProps = dispatch => (
  {
    setSelectedCity: value => dispatch(setSelectedCity(value))
  }
)

export default connect(null, mapDispatchToProps)(LocationListContainer)