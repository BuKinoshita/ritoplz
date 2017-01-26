'use strict'

import React from 'react'
import { Provider } from 'react-redux'

import Meta from '../components/meta'
import configureStore from '../store/configure-store'
import FormLogin from '../containers/form-login'
import Header from '../components/header'
import Footer from '../components/footer'
import { isLogged } from './../services/auth'

const Login = props => {
  const store = configureStore()
  const items = [
    {name: 'Rankings', link: 'rankings', type: 'item'},
    {name: 'Signup', link: 'signup', type: 'item'}
  ]

  if (isLogged()) {
    props.url.replaceTo('/profile')
  }

  return (
    <Provider store={store}>
      <div>
        <Meta/>

        <Header items={items}/>

        <section className={style(styles.row)}>
          <h1 className={style(styles.title)}>Nice to see you today!</h1>
          <h2 className={style(styles.subtitle)}>Enter your info below to login.</h2>

          <FormLogin routing={props}/>
        </section>

        <Footer/>

        <style jsx>{`
          .row: {
            max-width: 900px;
            margin-left: auto;
            margin-right: auto;
          }

          .title: {
            color: #333;
            font-weight: 300;
            font-size: 3rem;
            text-align: center;
            margin-top: 50px;
          }

          .subtitle: {
            color: #ccc;
            font-weight: 300;
            font-size: 1.15rem;
            text-align: center;
            margin-bottom: 50px;
            margin-top: 5px;
          }
        `}</style>
      </div>
    </Provider>
  )
}

export default Login
