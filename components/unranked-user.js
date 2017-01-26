'use strict'

import React from 'react'
import { style } from 'next/css'

const styles = {
  rankingItem: {
    marginBottom: '20px',
    border: '1px solid #F3F5FB',
    borderRadius: '10px',
    boxShadow: '0 10px 50px rgba(0, 0, 0, .025)',
    paddingLeft: '25px',
    paddingRight: '25px',
    textAlign: 'center',
    padding: '15px 25px 30px',
    flexBasis: '32%',

    '@media (max-width: 750px)': {
      flexBasis: '100%'
    }
  },

  image: {
    flexBasis: '10%',
    marginTop: '24px',

    '@media (max-width: 750px)': {
      flexBasis: '100%',
      order: '1'
    }
  },

  avatar: {
    height: '50px',
    width: '50px',
    borderRadius: '5px'
  },

  rankingInfo: {
    marginTop: '14px',
    flexBasis: '35%',

    '@media (max-width: 750px)': {
      flexBasis: '100%',
      order: '3',
      marginTop: '10px'
    }
  },

  username: {
    fontSize: '1.25rem',
    fontWeight: '400',
    color: '#333'
  },

  summoner: {
    fontSize: '1rem',
    fontWeight: '600',
    color: 'rgba(0, 0, 0, .5)'
  },

  location: {
    fontSize: '.9rem',
    fontWeight: '400',
    color: '#999',
    marginTop: '7px'
  },

  pin: {
    width: '10px',
    marginRight: '5px',
    verticalAlign: 'middle'
  },

  streak: {
    marginLeft: '10px',
    position: 'relative'
  }
}

export default props => {
  const { data: { username, name, profileIconId, country, city, state } } = props
  const location = `${city}, ${state} — ${country}`

  return (
    <li className={style(styles.rankingItem)}>
      <figure className={style(styles.image)}>
        <img className={style(styles.avatar)} src={`https://ddragon.leagueoflegends.com/cdn/7.1.1/img/profileicon/${profileIconId}.png`} alt=""/>
      </figure>

      <div className={style(styles.rankingInfo)}>
        <h2 className={style(styles.username)}>{username}</h2>
        <h3 className={style(styles.summoner)}>{name}</h3>
        <h4 className={style(styles.location)}>
          <img className={style(styles.pin)}src="static/location-pin.svg" alt=""/>
          {location}
        </h4>
      </div>
    </li>
  )
}
