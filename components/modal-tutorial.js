'use strict'

import React, { Component } from 'react'
import { style } from 'next/css'
import Modal from 'react-modal'
import Slider from 'react-slick'

import { toggleTutorial } from './../services/auth'

const styles = {
  title: {
    textAlign: 'center',
    color: '#333',
    fontSize: '2rem',
    fontWeight: '500',
    marginBottom: '10px'
  },

  subtitle: {
    color: '#999',
    fontSize: '1.15rem',
    fontWeight: '400',
    textAlign: 'center',
    marginBottom: '30px',
    lineHeight: '2rem'
  },

  btn: {
    color: '#52bdab',
    borderRadius: '5px',
    padding: '10px 25px',
    fontSize: '.9rem',
    fontWeight: '500',
    cursor: 'pointer',
    border: '2px solid #52bdab',
    float: 'right',
    backgroundColor: 'transparent',
    marginTop: '70px',
    marginRight: '5px',
    transition: '.25s',

    ':hover': {
      opacity: '.5'
    }
  },

  slickImage: {
    display: 'inline-block',
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',

    '@media (max-width: 750px)': {
      maxWidth: '100%'
    }
  },

  image: {
    maxWidth: '100%'
  }
}

const customStyle = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, .75)'
  },

  content: {
    top: 25,
    bottom: 'auto',
    left: '15px',
    right: '15px',
    border: 'none',
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: '50px',
    boxShadow: '0 10px 50px rgba(0, 0, 0, .1)',
    maxWidth: '850px',
    width: '90%',
    textAlign: 'center'
  }
}

class ModalTutorial extends Component {
  constructor (props) {
    super()

    this.handleCloseModal = this.handleCloseModal.bind(this)
    this.setCookie = this.setCookie.bind(this)

    this.state = {
      modalStatus: props.open,
      checker: false
    }
  }

  componentWillReceiveProps({ open }) {
    this.setState({modalStatus: open})
  }

  handleCloseModal () {
    this.setState({modalStatus: false})
  }

  setCookie () {
    this.setState({checker: !this.state.checker})
    setTimeout(() => toggleTutorial(this.state.checker), 1)
  }

  render () {
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true
    }

    return (
      <Modal isOpen={this.state.modalStatus} onRequestClose={this.handleCloseModal} style={customStyle}>
        <Slider {...settings}>
          <div>
            <h1 className={style(styles.title)}>Learn how to confirm your summoner</h1>
            <h2 className={style(styles.subtitle)}>To participate on Ritoplz Rankings you must confirm your summoner</h2>

            <img className={style(styles.image)} src="static/placeholder.svg" alt=""/>
          </div>

          <div>
            <h1 className={style(styles.title)}>Receive a new code</h1>
            <h2 className={style(styles.subtitle)}>You will get a code for each summoner you add</h2>

            <img className={style(styles.slickImage)} src="static/code.png" alt=""/>
          </div>

          <div>
            <h1 className={style(styles.title)}>Mastery Pages in League of Legends</h1>
            <h2 className={style(styles.subtitle)}>Create a new Mastery Page and name it with the code</h2>

            <img className={style(styles.slickImage)} src="static/mastery.svg" alt=""/>
          </div>

          <div>
            <h1 className={style(styles.title)}>Confirm your summoner</h1>
            <h2 className={style(styles.subtitle)}>After creating your mastery page with the code, you need to confirm your summoner by clicking confirm summoner above your summoner card</h2>

            <img className={style(styles.slickImage)} src="static/confirm.svg" alt=""/>

            <button className={style(styles.btn)} onClick={this.handleCloseModal}>Done</button>
          </div>
        </Slider>
      </Modal>
    )
  }
}

export default ModalTutorial
