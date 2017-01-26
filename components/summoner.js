'use strict'

import React, { Component } from 'react'
import { style } from 'next/css'

const styles = {
  base: {
    flexBasis: 'calc(50% - 30px)',
    margin: '15px',

    '@media (max-width: 750px)': {
      flexBasis: '100%'
    }
  },

  cover: {
    width: '100%'
  },

  info: {
    borderLeft: '1px solid #F3F5FB',
    borderBottom: '1px solid #F3F5FB',
    borderRight: '1px solid #F3F5FB',
    marginTop: 0,
    width: '100%',
    paddingLeft: 0,
    paddingRight: 0,
    boxSizing: 'border-box',
    borderBottomRightRadius: '10px',
    borderBottomLeftRadius: '10px'
  },

  item: {
    display: 'inline-block',
    width: '33.33%',
    textAlign: 'center',
    paddingTop: '20px',
    paddingBottom: '20px'
  },

  title: {
    marginTop: 0,
    fontWeight: 400,
    fontSize: '.9rem',
    color: '#ccc',
    marginBottom: '5px',

    '@media (max-width: 750px)': {
      fontSize: '.8rem'
    }
  },

  subtitle: {
    fontSize: '1.2rem',
    fontWeight: 600,
    color: '#333',

    '@media (max-width: 750px)': {
      fontSize: '.9rem'
    }
  },

  checkmark: {
    verticalAlign: 'middle'
  },

  confirm: {
    width: '100%',
    backgroundColor: 'transparent',
    padding: '20px',
    fontSize: '1rem',
    border: 'none',
    borderTop: '1px solid #F3F5FB',
    color: '#ccc',
    cursor: 'pointer',
    transition: '.25s ease-in-out',
    outline: 'none',

    ':hover': {
      color: '#333'
    }
  }
}

export default class Summoner extends Component {
  render () {
    const check = this.props.status ? '/static/checkmark.png' : '/static/errormark.png'
    const confirm = this.props.status ? '' : <button className={style(styles.confirm)} onClick={() => this.props.onConfirmSummoner(this.props.name)}>Confirm summoner</button>

    return (
      <article className={style(styles.base)}>
        <header className={style(styles.header)}>
          <img className={style(styles.cover)} src={this.props.cover} alt=""/>
        </header>

        <ul className={style(styles.info)}>
          <li className={style(styles.item)}>
            <h3 className={style(styles.title)}>Summoner</h3>
            <span className={style(styles.subtitle)}>{this.props.name}</span>
          </li>

          <li className={style(styles.item)}>
            <h3 className={style(styles.title)}>Code</h3>
            <span className={style(styles.subtitle)}>{this.props.code}</span>
          </li>

          <li className={style(styles.item)}>
            <h3 className={style(styles.title)}>Status</h3>
            <span>
              <img className={style(styles.checkmark)} src={check} alt=""/>
            </span>
          </li>

          {confirm}
        </ul>
      </article>
    )
  }
}
