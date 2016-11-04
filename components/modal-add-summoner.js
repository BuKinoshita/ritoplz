'use strict'

import React, { Component } from 'react'
import { style } from 'next/css'
import Modal from 'react-modal'

export default class extends Component {
  constructor () {
    super()

    this.submitForm = this.submitForm.bind(this)
  }

  submitForm (e) {
    e.preventDefault()
    const data = this.summoner.value
    this.props.handleSubmit(data)
  }

  render () {
    return (
      <Modal isOpen={this.props.modal} style={customStyle}>
        <form onSubmit={this.submitForm}>
          <fieldset className={style(styles.formInput)}>
            <label className={style(styles.label)}>Summoner</label>
            <input className={style(styles.input)} type="text" ref={node => this.summoner = node} />
          </fieldset>

          <button className={style(styles.btn)}>Add Summoner</button>
        </form>
      </Modal>
    )
  }
}

const styles = {
  formInput: {
    border: 'none',
    marginBottom: '20px'
  },

  label: {
    display: 'inline-block',
    marginBottom: '10px',
    fontWeight: 600,
    fontSize: '1.15rem',
    color: '#333'
  },

  input: {
    padding: '20px 15px',
    width: '100%',
    border: '1px solid #eee',
    borderRadius: '5px',
    fontSize: '1.1rem',
    outline: 'none',

    ':focus': {
      borderColor: '#ccc'
    }
  },

  btn: {
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    padding: '10px 25px',
    fontSize: '1rem',
    height: '55px',
    marginTop: '30px',
    fontWeight: '500',
    cursor: 'pointer',
    width: '100%',
    background: '-moz-linear-gradient(left, #52bdab 0%, #6BB6D6 100%)',
    background: '-webkit-linear-gradient(left, #52bdab 0%,#6BB6D6 100%)',
    background: 'linear-gradient(to right, #52bdab 0%,#6BB6D6 100%)'
  }
}

const customStyle = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, .75)'
  },

  content: {
    top: 100,
    bottom: 'auto',
    left: 475,
    right: 475,
    border: 'none',
    padding: '50px',
    boxShadow: '0 10px 50px rgba(0, 0, 0, .1)'
  }
}