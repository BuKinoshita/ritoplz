'use strict'

import React, { Component } from 'react'
import { style } from 'next/css'
import summonerCover from 'ritoplz-summoner'

import Summoner from './summoner'
import ModalAddSummoner from './../containers/modal-add-summoner'

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  title: {
    color: '#333',
    marginBottom: '50px',
    fontWeight: 400
  },

  btn: {
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    padding: '10px 25px',
    fontSize: '.9rem',
    height: '50px',
    marginTop: '-50px',
    fontWeight: '500',
    cursor: 'pointer',
    background: 'linear-gradient(to right, #52bdab 0%,#6BB6D6 100%)'
  },

  row: {
    marginLeft: '-15px',
    marginRight: '-15px',
    display: 'flex',
    flexFlow: 'row wrap',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
}

class MySummoners extends Component {
  constructor () {
    super()

    this.handleModal = this.handleModal.bind(this)
    this.openTutorial = this.openTutorial.bind(this)

    this.state = {
      modalAddSummoner: false
    }
  }

  openTutorial () {
    this.setState({
      modalTutorial: true
    })
  }

  handleModal () {
    this.setState({
      modalAddSummoner: !this.state.modalAddSummoner,
      modalTutorial: false
    })
  }

  render () {
    return (
      <section>
        <header className={style(styles.header)}>
          <h2 className={style(styles.title)}>My Summoners</h2>
          <button className={style(styles.btn)} onClick={this.handleModal}>Add Summoner</button>
        </header>

        <div className={style(styles.row)}>
          {this.props.summoners.map((summoner, i) => {
            const cover = summonerCover()

            return <Summoner key={i} cover={cover} name={summoner.name} code={summoner.code} status={summoner.active} onConfirmSummoner={this.props.onConfirmSummoner}/>
          })}
        </div>

        <ModalAddSummoner open={this.state.modalAddSummoner}/>
      </section>
    )
  }
}

export default MySummoners
