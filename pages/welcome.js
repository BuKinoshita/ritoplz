'use strict'

import React, { Component } from 'react'
import { Provider } from 'react-redux'
import Alert from 'react-s-alert'

import Meta from '../components/meta'
import Onboard from '../containers/onboard'
import configureStore from '../store/configure-store'
import Header from '../components/header'
import Footer from '../components/footer'
import { isLogged } from './../services/auth'

const store = configureStore()

export default class extends Component {
  constructor () {
    super()

    this.throwError = this.throwError.bind(this)
    store.subscribe(() => store.getState())
  }

  throwError (message) {
    Alert.error(message, {position: 'top-right'})
  }

  render () {
    const items = [
      {name: 'Rankings', link: 'rankings', type: 'item'}
    ]

    if (!isLogged()) {
      this.props.url.replaceTo('/signup')
    }

    return (
      <Provider store={store}>
        <div>
          <Meta/>

          <div>
            <Header items={items}/>

            <div className="row">
              <Onboard routing={this.props} throwError={this.throwError}/>
            </div>

            <Footer/>

            <Alert effect="jelly" stack={{limit: 3}}/>
          </div>

          <style jsx>{`
            .row {
              max-width: 900px;
              margin-left: auto;
              margin-right: auto;
              font-family: Source Sans Pro;
              padding-bottom: 50px;
            }
          `}
          </style>
        </div>
      </Provider>
    )
  }
}
