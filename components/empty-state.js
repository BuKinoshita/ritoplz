'use strict'

/* @flow */

import React, {Component} from 'react'
import { style } from 'next/css'

import ModalAddSummoner from './../containers/modal-add-summoner'

const styles = {
  base: {
    border: '1px solid #F3F5FB',
    borderRadius: '10px',
    textAlign: 'center',
    paddingTop: '50px',
    paddingBottom: '50px',
    boxShadow: '0 10px 50px rgba(0, 0, 0, .025)',
    marginBottom: '70px'
  },

  title: {
    color: '#333',
    fontWeight: '400',
    fontSize: '2rem',
    marginBottom: '15px'
  },

  subtitle: {
    color: '#ccc',
    marginTop: 0,
    fontWeight: '300',
    fontSize: '20px',
    lineHeight: '33px',
    maxWidth: '320px',
    marginLeft: 'auto',
    marginRight: 'auto'
  },

  btn: {
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    padding: '10px 25px',
    fontSize: '.9rem',
    height: '50px',
    marginTop: '30px',
    fontWeight: '500',
    cursor: 'pointer',
    background: 'linear-gradient(to right, #52bdab 0%,#6BB6D6 100%)'
  }
}

class EmptyState extends Component {
  constructor () {
    super()

    this.handleModal = this.handleModal.bind(this)

    this.state = {
      modalAddSummoner: false
    }
  }

  handleModal () {
    this.setState({modalAddSummoner: !this.state.modalAddSummoner})
  }

  render () {
    return (
      <section className={style(styles.base)}>
        <h2 className={style(styles.title)}>You don't have any Summoner yet</h2>
        <h3 className={style(styles.subtitle)}>To join the Ritoplz Ranking you must add your summoner</h3>

        <button className={style(styles.btn)} onClick={this.handleModal}>Add summoner</button>

        <ModalAddSummoner open={this.state.modalAddSummoner}/>
      </section>
    )
  }
}

export default EmptyState
