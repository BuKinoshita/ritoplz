'use strict'

/* global fetch: false */

import React, {Component} from 'react'
import { Provider } from 'react-redux'

import configureStore from '../store/configureStore'
import FormSignUp from '../components/form-sign-up'

export default class SignUp extends Component {
  render () {
    const store = configureStore()

    return (
      <Provider store={store}>
        <div className="row">
          <h2 className="title">Sign Up</h2>
          <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel lacus vel augue aliquet luctus. Ut urna libero.</p>

          <FormSignUp routing={this.props}/>
        </div>
      </Provider>
    )
  }
}

