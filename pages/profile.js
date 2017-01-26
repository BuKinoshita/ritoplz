'use strict'

import React, { Component } from 'react'
import { Provider } from 'react-redux'

import Meta from '../components/meta'
import ProfileContent from '../containers/profile-content'
import configureStore from '../store/configure-store'
import Header from '../components/header'
import Footer from '../components/footer'
import { isLogged } from './../services/auth'

const store = configureStore()

export default class extends Component {
  constructor () {
    super()

    store.subscribe(() => store.getState())
  }

  render () {
    if (!isLogged()) {
      this.props.url.replaceTo('/login')
    }

    const items = [
      {name: 'Rankings', link: 'rankings', type: 'item'},
      {name: 'Logout', link: 'logout', type: 'item'}
    ]

    return (
      <Provider store={store}>
        <div>
          <Meta/>

          <div className="row">
            <ProfileContent/>
          </div>

          <Footer/>

          <style jsx>{`
            .row {
              max-width: 900px;
              margin-left: auto;
              margin-right: auto;
              font-family: Source Sans Pro;
              padding-bottom: 50px;
            }

            .notification: {
              background-color: red;
            }
          `}
          </style>
        </div>
      </Provider>
    )
  }
}
