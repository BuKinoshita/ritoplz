'use strict'

import React, { Component } from 'react'
import { connect } from 'react-redux'
import Select from 'react-select'
import { style } from 'next/css'
import Slider from 'react-slick'

import fetchAccount from '../actions/fetch-account'
import confirmSummoner from '../actions/confirm-summoner'
import { countries, locations } from '../services/places'
import editUser from './../actions/edit-user'
import addSummoner from './../actions/add-summoner'
import {
  EDIT_USER_SUCCESS,
  EDIT_USER_ERROR,
  ADD_SUMMONER_SUCCESS,
  ADD_SUMMONER_ERROR,
  ACCOUNT_SUCCESS
} from './../constants'

const styles = {
  formInput: {
    border: 'none',
    marginBottom: '20px'
  },

  label: {
    display: 'inline-block',
    marginBottom: '10px',
    fontWeight: 600,
    fontSize: '1.15rem',
    color: '#333'
  },

  input: {
    padding: '20px 15px',
    width: '100%',
    border: '1px solid #eee',
    borderRadius: '5px',
    fontSize: '1.1rem',
    outline: 'none',

    ':focus': {
      borderColor: '#ccc'
    }
  },

  title: {
    textAlign: 'center',
    color: '#333',
    fontSize: '2rem',
    fontWeight: '500',
    marginBottom: '10px'
  },

  subtitle: {
    color: '#999',
    fontSize: '1.15rem',
    fontWeight: '400',
    textAlign: 'center',
    marginBottom: '30px',
    lineHeight: '2rem'
  },

  slickImage: {
    display: 'inline-block',
    width: '70%',
    marginTop: '55px',
    marginLeft: 'auto',
    marginRight: 'auto'
  },

  form: {
    maxWidth: '500px',
    marginLeft: 'auto',
    marginRight: 'auto'
  },

  summoner: {
    marginTop: '75px'
  },

  btnPrev: {
    float: 'left',
    outline: 'none',
    color: '#52bdab',
    border: 'none',
    borderRadius: '5px',
    padding: '10px 25px',
    fontSize: '1rem',
    height: '45px',
    marginTop: '30px',
    fontWeight: '500',
    cursor: 'pointer',
    background: 'transparent'
  },

  btnNext: {
    float: 'right',
    outline: 'none',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    padding: '10px 25px',
    fontSize: '1rem',
    height: '45px',
    marginTop: '30px',
    fontWeight: '500',
    cursor: 'pointer',
    background: 'linear-gradient(to right, #52bdab 0%,#6BB6D6 100%)'
  },

  codeCase: {
    border: '1px solid #ccc',
    padding: '20px',
    borderRadius: '4px',
    width: '300px',
    position: 'relative',
    margin: '25px auto'
  },

  code: {
    fontSize: '1.5rem',
    color: '#333',
    lineHeight: '1',
    verticalAlign: 'middle'
  },

  codeBtn: {
    height: '60px',
    backgroundColor: 'transparent',
    border: 'none',
    top: '0',
    position: 'absolute',
    right: '0',
    width: '100px',
    fontSize: '1rem',
    borderLeft: '1px solid #ccc',
    outline: 'none',
    color: '#333'
  },

  mastery: {
    maxWidth: '90%',
    borderRadius: '6px'
  },

  stepImage: {
    flexBasis: '100%'
  },

  steps: {
    display: 'flex',
    justifyContent: 'space-between'
  },

  stepList: {
    marginTop: '50px'
  },

  step: {
    marginBottom: '30px'
  },

  stepNumber: {
    display: 'block',
    fontSize: '1.5rem',
    color: '#333',
    marginBottom: '10px'
  },

  stepText: {
    color: '#999'
  }
}

class Onboard extends Component {
  constructor () {
    super()

    this.handleNextSlide = this.handleNextSlide.bind(this)
    this.handlePreviousSlide = this.handlePreviousSlide.bind(this)
    this.submitLocation = this.submitLocation.bind(this)
    this.submitSummoner = this.submitSummoner.bind(this)
    this.handleCountry = this.handleCountry.bind(this)
    this.handleState = this.handleState.bind(this)
    this.handleCity = this.handleCity.bind(this)
    this.handleConfirmSummoner = this.handleConfirmSummoner.bind(this)

    this.state = {
      countryList: countries,
      stateList: null,
      cityList: null,
      country: null,
      state: null,
      city: null,
      code: null,
      account: {}
    }
  }

  handleNextSlide () {
    this.slider.slickNext()
  }

  handlePreviousSlide () {
    this.slider.slickPrev()
  }

  handleCountry (e) {
    this.setState({
      country: e.value,
      stateList: locations[e.value]
    })
  }

  handleState (e) {
    const city = locations[this.state.country].filter(state => state.value === e.value)
    this.setState({
      state: e.label,
      stateParam: e.value,
      cityList: city[0].cities
    })
  }

  handleCity (e) {
    this.setState({city: e.value})
  }

  submitLocation () {
    const userData = {
      country: this.state.country,
      state: this.state.state,
      city: this.state.city
    }

    this.props.editUser(userData)
      .then(({ data, type }) => {
        if (type === EDIT_USER_SUCCESS) {
          this.handleNextSlide()
        }

        if (type === EDIT_USER_ERROR) {
          this.props.throwError(data)
        }
      })
  }

  submitSummoner () {
    const summoner = {name: this.summoner.value}

    this.props.addSummoner(summoner)
      .then(({ data, type }) => {
        if (type === ADD_SUMMONER_SUCCESS) {
          this.handleNextSlide()
          this.setState({code: data.code})
          this.props.fetchAccount()
            .then(({ data, type }) => {
              if (type === ACCOUNT_SUCCESS) {
                this.setState({account: data})
              }
            })
        }

        if (type === ADD_SUMMONER_ERROR) {
          this.props.throwError(data)
        }
      })
  }

  handleConfirmSummoner () {
    const summoner = this.state.account.summoners[0].name
    this.props.confirmSummoner(summoner)
      .then(({ data }) => {
        if (data) {
          this.props.routing.url.pushTo('/profile')
        } else {
          this.props.throwError('Summoner not confirmed yet')
        }
      })
  }

  render () {
    const settings = {
      dots: false,
      infinite: false,
      speed: 200,
      slidesToShow: 1,
      slidesToScroll: 1,
      draggable: false
    }

    return (
      <Slider ref={c => this.slider = c} {...settings}>
        <div>
          <img className={style(styles.slickImage)} src="static/placeholder.svg" alt=""/>

          <h1 className={style(styles.title)}>Welcome to Ritoplz</h1>
          <h2 className={style(styles.subtitle)}>We will guide you to configure your account</h2>

          <button className={style(styles.btnNext)} onClick={this.handleNextSlide}>Next</button>
        </div>

        <div>
          <h1 className={style(styles.title)}>Choose your location</h1>
          <h2 className={style(styles.subtitle)}>This is the location you will join.</h2>

          <div className={style(styles.form)}>
            <fieldset className={style(styles.formInput)}>
              <label className={style(styles.label)}>Country</label>
              <Select options={this.state.countryList} value={this.state.country} onChange={this.handleCountry}/>
            </fieldset>

            <fieldset className={style(styles.formInput)}>
              <label className={style(styles.label)}>State</label>
              <Select options={this.state.stateList} value={this.state.stateParam} onChange={this.handleState}/>
            </fieldset>

            <fieldset className={style(styles.formInput)}>
              <label className={style(styles.label)}>City</label>
              <Select options={this.state.cityList} value={this.state.city} onChange={this.handleCity}/>
            </fieldset>
          </div>

          <button className={style(styles.btnPrev)} onClick={this.handlePreviousSlide}>Previous</button>
          <button className={style(styles.btnNext)} onClick={this.submitLocation}>Next</button>
        </div>

        <div>
          <div className={style(styles.summoner)}>
            <h1 className={style(styles.title)}>Let's add your summoner now</h1>
            <h2 className={style(styles.subtitle)}>Your League of Legends summoner name</h2>

            <div className={style(styles.form)}>
              <fieldset className={style(styles.formInput)}>
                <label className={style(styles.label)}>Summoner name</label>
                <input className={style(styles.input)} type="text" ref={node => this.summoner = node}/>
              </fieldset>
            </div>
          </div>

          <button className={style(styles.btnPrev)} onClick={this.handlePreviousSlide}>Previous</button>
          <button className={style(styles.btnNext)} onClick={this.submitSummoner}>Next</button>
        </div>

        <div>
          <h1 className={style(styles.title)}>Confirm your summoner</h1>
          <h2 className={style(styles.subtitle)}>Copy the code below to confirm your summoner</h2>

          <div className={style(styles.steps)}>
            <div className={style(styles.stepImage)}>
              <img className={style(styles.mastery)} src="static/mastery-lol.png" alt=""/>
            </div>

            <ul className={style(styles.stepList)}>
              <li className={style(styles.step)}>
                <span className={style(styles.stepNumber)}>Step 1.</span>
                <span className={style(styles.stepText)}>Create or Edit a Mastery Page or a Runes Page</span>
              </li>

              <li className={style(styles.step)}>
                <span className={style(styles.stepNumber)}>Step 2.</span>
                <span className={style(styles.stepText)}>Use this code ({this.state.code}) as the page name</span>
              </li>

              <li className={style(styles.step)}>
                <span className={style(styles.stepNumber)}>Step 3.</span>
                <span className={style(styles.stepText)}>Click on confirm your summoner</span>
              </li>
            </ul>
          </div>

          <div className={style(styles.codeCase)}>
            <p className={style(styles.code)}>{this.state.code}</p>
            <button className={style(styles.codeBtn)}>Your code</button>
          </div>

          <button className={style(styles.btnPrev)} onClick={this.handlePreviousSlide}>Previous</button>
          <button className={style(styles.btnNext)} onClick={this.handleConfirmSummoner}>Confirm Summoner</button>
        </div>
      </Slider>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchAccount: () => dispatch(fetchAccount()),
    editUser: user => dispatch(editUser(user)),
    addSummoner: summoner => dispatch(addSummoner(summoner)),
    confirmSummoner: summoner => dispatch(confirmSummoner(summoner))
  }
}

export default connect(null, mapDispatchToProps)(Onboard)
