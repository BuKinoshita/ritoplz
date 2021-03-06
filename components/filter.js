'use strict'

import React, { Component } from 'react'
import Select from 'react-select'
import { style } from 'next/css'
import Alert from 'react-s-alert'

import { countries, locations } from '../services/places'
import { RANKINGS_ERROR } from './../constants'

const styles = {
  filter: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '30px'
  },

  input: {
    flexBasis: '100%',
    marginLeft: '10px',
    marginRight: '10px'
  }
}

class Filter extends Component {
  constructor () {
    super()

    this.state = {
      stateList: locations['BR'],
      cityList: null,
      state: null,
      city: null
    }

    this.handleState = this.handleState.bind(this)
    this.handleCity = this.handleCity.bind(this)
  }

  handleState (e) {
    const city = locations['BR'].filter(state => state.value === e.value)
    let params

    this.setState({
      state: e.value,
      stateParam: e.label,
      cityList: city[0].cities
    })

    if (this.props.selected === 'ranked') {
      params = {
        country: 'BR',
        state: e.label,
        limit: 100,
        skip: 0
      }
    } else {
      params = {
        country: 'BR',
        state: e.label,
        limit: 300,
        unrankeds: true
      }
    }

    this.props.fetchRankings(params)
      .then(res => {
        const dataLocation = {
          summoners: res.data.summoners,
          state: this.state.stateParam,
          city: undefined
        }

        if (typeof res.data === 'undefined') {
          Alert.error('Nenhum invocador encontrado nessa região', {position: 'bottom-right'})
          this.props.changeLocation(dataLocation)
        }

        this.props.changeLocation(dataLocation)
      }).catch(err => console.log('err', err))
  }

  handleCity (e) {
    this.setState({city: e.value})
    let params
    if (this.props.selected === 'ranked') {
      params = {
        country: 'BR',
        state: this.state.stateParam,
        limit: 100,
        skip: 0,
        city: e.label
      }
    } else {
      params = {
        country: 'BR',
        state: this.state.stateParam,
        city: e.label,
        limit: 300,
        unrankeds: true
      }
    }

    this.props.fetchRankings(params)
      .then(res => {
        const dataLocation = {
          summoners: res.data.summoners,
          state: this.state.stateParam,
          city: undefined
        }

        if (typeof res.data === 'undefined') {
          Alert.error('Nenhum invocador encontrado nessa região', {position: 'bottom-right'})
          this.props.changeLocation(dataLocation)
        }

        this.props.changeLocation(dataLocation)
      }).catch(err => console.log('err', err))
  }

  render () {
    return (
      <section className={style(styles.filter)}>
        <div className={style(styles.input)}>
          <Select options={this.state.stateList} value={this.state.state} onChange={this.handleState} placeholder="Selecione um estado..."/>
        </div>

        <div className={style(styles.input)}>
          <Select options={this.state.cityList} value={this.state.city} onChange={this.handleCity} placeholder="Selecione uma cidade..."/>
        </div>

        <Alert effect="jelly" stack={{limit: 3}}/>
      </section>
    )
  }
}

export default Filter
