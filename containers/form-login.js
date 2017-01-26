'use strict'

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { style } from 'next/css'
import Alert from 'react-s-alert'

import loginRequest from '../actions/login'
import { LOGIN_SUCCESS, LOGIN_ERROR } from './../constants'
import { setToken } from './../services/auth'

const styles = {
  loginForm: {
    maxWidth: '60%',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingBottom: '50px'
  },

  formInput: {
    border: 'none',
    marginBottom: '25px'
  },

  label: {
    display: 'block',
    fontSize: '1rem',
    fontWeight: '500',
    marginBottom: '10px'
  },

  input: {
    width: '100%',
    height: '55px',
    borderRadius: '4px',
    border: '1px solid #f2f2f2',
    padding: '15px',
    fontSize: '1.15rem',
    outline: 'none',
    color: '#333',
    transition: '.25s',

    ':focus': {
      borderColor: '#ddd'
    }
  },

  btn: {
    width: '100%',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    padding: '10px 25px',
    fontSize: '.9rem',
    height: '55px',
    marginTop: '25px',
    fontWeight: '500',
    cursor: 'pointer',
    background: 'linear-gradient(to right, #52bdab 0%,#6BB6D6 100%)'
  }
}

class FormLogin extends Component {
  constructor() {
    super()

    this.handleLogin = this.handleLogin.bind(this)
  }

  handleLogin(e) {
    e.preventDefault()

    const userData = {
      email: this.email.value,
      password: this.password.value
    }

    this.props.loginRequest(userData)
      .then(({ data, type }) => {
        const token = data.token

        if (type === LOGIN_SUCCESS) {
          setToken(token)
          this.props.routing.url.replaceTo('/profile')
        }

        if (type === LOGIN_ERROR) {
          Alert.error(data, {position: 'top-right'})
        }
      })
  }

  render() {
    return (
      <form className={style(styles.loginForm)} onSubmit={this.handleLogin}>
        <fieldset className={style(styles.formInput)}>
          <label className={style(styles.label)}>E-mail</label>
          <input className={style(styles.input)} type="email" name="email" ref={input => this.email = input}/>
        </fieldset>

        <fieldset className={style(styles.formInput)}>
          <label className={style(styles.label)}>Password</label>
          <input className={style(styles.input)} type="password" name="password" ref={input => this.password = input}/>
        </fieldset>

        <button className={style(styles.btn)} type="submit">Login</button>

        <Alert effect="jelly" stack={{limit: 3}}/>
      </form>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loginRequest: userData => dispatch(loginRequest(userData))
  }
}

export default connect(null, mapDispatchToProps)(FormLogin)
