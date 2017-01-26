'use strict'

import React from 'react'
import { Provider } from 'react-redux'

import Meta from '../components/meta'
import configureStore from '../store/configure-store'
import FormSignup from '../containers/form-signup'
import Header from '../components/header'
import Footer from '../components/footer'

const Signup = props => {
  const store = configureStore()
  const items = [
    {name: 'Rankings', link: 'rankings', type: 'item'},
    {name: 'Login', link: 'login', type: 'item'}
  ]

  return (
    <Provider store={store}>
      <div>
        <Meta/>

        <Header items={items}/>

        <section className="row">
          <h1 className="title">Join our Ranking!</h1>
          <h2 className="subtitle">Enter your info below to sign up.</h2>

          <FormSignup routing={props}/>
        </section>

        <Footer/>

        <style jsx>{`
          .row {
            max-width: 900px;
            margin-left: auto;
            margin-right: auto;
          }

          .title {
            color: #333;
            font-weight: 300;
            font-size: 3rem;
            text-align: center;
            margin-top: 50px;
          }

          .subtitle {
            color: #ccc,
            font-weight: 300;
            font-size: 1.15rem;
            text-align: center;
            margin-bottom: 50px;
            margin-top: 5px;
          }
        `}
        </style>
      </div>
    </Provider>
  )
}

export default Signup
