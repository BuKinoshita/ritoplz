'use strict'

/* global localStorage: false */

import React, { Component } from 'react'
import axios from 'axios'

export default class Login extends Component {
  constructor (props) {
    super(props)
    this.handleLogin = this.handleLogin.bind(this)
  }

  handleLogin (e) {
    e.preventDefault()

    axios.post('http://localhost:3001/login', {
      email: this.email.value,
      password: this.password.value
    }).then(res => {
      const token = res.data.token
      localStorage.setItem('token', token)
      this.props.url.pushTo('/profile')
    }).catch(err => {
      console.log(err)
    })
  }

  render () {
    return (
      <div className="row">
        <h2 className="title">Login</h2>
        <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel lacus vel augue aliquet luctus. Ut urna libero.</p>

        <form className="registration-form" onSubmit={this.handleLogin}>
          <fieldset className="form-input">
            <label className="label">E-mail</label>
            <input className="input" type="text" name="email" ref={input => {this.email = input}}/>
          </fieldset>

          <fieldset className="form-input">
            <label className="label">Password</label>
            <input className="input" type="password" name="password" ref={input => {this.password = input}}/>
          </fieldset>

          <button className="btn -secondary -large" type="submit">Login</button>
        </form>
      </div>
    )
  }
}

Login.propTypes = {
  url: React.PropTypes.object
}
