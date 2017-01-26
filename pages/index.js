'use strict'

import React from 'react'
import Link from 'next/link'
import { Provider } from 'react-redux'

import Meta from '../components/meta'
import Footer from '../components/footer'
import TopPlayers from '../containers/top-players'
import Header from '../components/header'
import configureStore from '../store/configure-store'
import { isLogged } from './../services/auth'

export default () => {
  const store = configureStore()
  let items

  if (isLogged()) {
    items = [
      {name: 'Rankings', link: 'rankings', type: 'item'},
      {name: 'Profile', link: 'profile', type: 'button'}
    ]
  } else {
    items = [
      {name: 'Rankings', link: 'rankings', type: 'item'},
      {name: 'Login', link: 'login', type: 'button'}
    ]
  }

  store.subscribe(() => store.getState())

  return (
    <Provider store={store}>
      <div>
        <Meta/>

        <Header items={items}/>

        <main className={style(styles.cover)}>
          <div className={style(styles.row)}>
            <h1 className={style(styles.title)}>Make sure you are on top</h1>
            <h2 className={style(styles.subtitle)}>The first worldwide League of Legends Rankings. <br/>See who’s the best player of your region.</h2>

            <Link href="/signup">
              <span className={style(styles.btn)}>Join Ritoplz</span>
            </Link>

            <Link href="/rankings">
              <span className={style(styles.btnLink)}>See Rankings</span>
            </Link>

            <img className={style(styles.card)} src="static/card.png" alt=""/>
          </div>
        </main>

        <TopPlayers/>

        <section className={style(styles.tier)}>
          <h2 className={style(styles.tierTitle)}>Compete with players of your region</h2>
          <h3 className={style(styles.tierSubtitle)}>Rankings per regions, per champion, per elo, per victory streak.</h3>

          <div className={style(styles.tierDrop)}/>

          <div className={style(styles.row)}>
            <Link href="/signup">
              <span className={style(styles.joinBtn)}>Join Ritoplz</span>
            </Link>

            <ul className={style(styles.tierList)}>
              <li className={style(styles.tierItem)}>
                <img src="https://ritoplz-tier.now.sh/bronze_small.png" alt=""/>
                <h3 className={style(styles.tierItemTitle)}>Bronze</h3>
              </li>

              <li className={style(styles.tierItem)}>
                <img src="https://ritoplz-tier.now.sh/silver_small.png" alt=""/>
                <h3 className={style(styles.tierItemTitle)}>Silver</h3>
              </li>

              <li className={style(styles.tierItem)}>
                <img src="https://ritoplz-tier.now.sh/gold_small.png" alt=""/>
                <h3 className={style(styles.tierItemTitle)}>Gold</h3>
              </li>

              <li className={style(styles.tierItem)}>
                <img src="https://ritoplz-tier.now.sh/platinum_small.png" alt=""/>
                <h3 className={style(styles.tierItemTitle)}>Platinum</h3>
              </li>

              <li className={style(styles.tierItem)}>
                <img src="https://ritoplz-tier.now.sh/diamond_small.png" alt=""/>
                <h3 className={style(styles.tierItemTitle)}>Diamond</h3>
              </li>

              <li className={style(styles.tierItem)}>
                <img src="https://ritoplz-tier.now.sh/master_small.png" alt=""/>
                <h3 className={style(styles.tierItemTitle)}>Master</h3>
              </li>

              <li className={style(styles.tierItem)}>
                <img src="https://ritoplz-tier.now.sh/challenger_small.png" alt=""/>
                <h3 className={style(styles.tierItemTitle)}>Challenger</h3>
              </li>
            </ul>
          </div>
        </section>

        <Footer/>

        <style jsx>{`
          .row {
            max-width: 900px;
            margin-left: auto;
            margin-right: auto;
            position: relative;
          }

          .header {
            height: 70px;
          }

          .cover {
            background: url("static/bg.png") center center;
            backgroundSize: cover;
            height: 100vh;
            paddingTop: 110px;
            padding-bottom: 75px;
          }

          .title {
            color: #333;
            font-size: 4rem;
            textTransform: uppercase;
            max-width: 500px;
          }

          .subtitle {
            color: #999;
            font-size: 1.5rem;
            line-height: 2.5rem;
            margin-top: 10px;
            font-weight: 400;
            margin-bottom: 70px;
          }

          .btn {
            color: #fff;
            border: none;
            borderRadius: 5px;
            padding: 14px 28px;
            font-size: 1rem;
            height: 55px;
            font-weight: 500;
            cursor: pointer;
            background: linear-gradient(to right, #52bdab 0%,#6BB6D6 100%);
            margin-right: 15px;
          }

          .btnLink {
            color: #52bdab;
            background: transparent;
            text-align: center;
            padding: 14px 28px;
            height: 55px;
            font-size: 1rem;
            border: none;
            font-weight: 500;
            cursor: pointer;
          }

          .card {
            position: absolute;
            top: 30px;
            right: -135px;
          }

          .tier {
            padding-bottom: 100px;
          }

          .tierTitle {
            text-align: center;
            font-size: 3rem;
            color: #333;
          }

          .tierSubtitle {
            text-align: center;
            font-size: 1.5rem;
            color: #999;
            font-weight: 300;
            margin-top: 20px;
            margin-bottom: 75px;
          }

          .tierDrop {
            background: url(static/tierdrop.png) center center;
            backgroundSize: cover;
            minHeight: 700px;
          }

          .tierList {
            display: flex;
            justifyContent: space-between;
            max-width: 100%;
            overflowX: auto;
            margin-top: 100px;
          }

          .tierItem {
            text-align: center;
          }

          .tierItemTitle {
            font-weight: 400;
            color: #ccc;
            font-size: 1rem;
          }

          .joinBtn {
            text-align: center;
            marginRop: 150px;
            display: block;
            background-color: red;
            padding: 18px 20px;
            font-size: 1.25rem;
            borderRadius: 4px;
            margin-left: auto;
            margin-right: auto;
            width: 100%;
            max-width: 400px;
            background: linear-gradient(to right, #52bdab 0%,#6BB6D6 100%);
            margin-top: 100px;
            color: #fff;
          }
        `}</style>
      </div>
    </Provider>
  )
}
