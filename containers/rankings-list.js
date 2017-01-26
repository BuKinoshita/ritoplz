
'use strict'

import React, { Component } from 'react'
import { style } from 'next/css'
import { connect } from 'react-redux'

import fetchRankings from '../actions/fetch-rankings'
import RankingUser from './../components/ranking-user'
import UnrankedUser from './../components/unranked-user'
import Filter from './../components/filter'
import Loading from './../components/loading'

const styles = {
  title: {
    textAlign: 'center',
    fontWeight: '300',
    fontSize: '3rem',
    color: '#333',
    paddingTop: '75px',
    paddingBottom: '75px'
  },

  unrankedList: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },

  tab: {
    width: '50%',
    display: 'inline-block',
    textAlign: 'center',
    height: '60px',
    lineHeight: '60px',
    fontSize: '1.25rem',
    color: '#999',
    marginBottom: '40px',
    marginTop: '25px',
    cursor: 'pointer',
    transition: '.15s',

    ':hover': {
      color: '#333'
    }
  }
}

class RankingsList extends Component {
  constructor() {
    super()

    this.state = {
      summoners: [],
      unrankeds: [],
      selected: 'ranked',
      fetched: false
    }

    this.changeList = this.changeList.bind(this)
  }

  componentDidMount() {
    this.props.fetchRankings().then(() => {
      this.setState({fetched: true})
    })
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      summoners: nextProps.rankings.data.summoners,
      unrankeds: nextProps.rankings.data.unrankeds
    })
  }

  changeList (type) {
    this.setState({selected: type})
  }

  render () {
    let rankingList
    let list

    if (this.state.fetched) {
      if (this.state.selected === 'ranked') {
        list = (
          <ul>
            {this.state.summoners.map((summoner, i) => {
              return <RankingUser data={summoner} key={summoner._id} position={i + 1}/>
            })}
          </ul>
        )
      } else {
        list = (
          <ul className={style(styles.unrankedList)}>
            {this.state.unrankeds.map(summoner => {
              return <UnrankedUser data={summoner} key={summoner._id}/>
            })}
          </ul>
        )
      }

      rankingList = (
        <div>
          <Filter fetchRankings={this.props.fetchRankings} summoners={this.state.summoners}/>

          <nav className={style(styles.tabs)}>
            <span className={style(styles.tab)} onClick={() => this.changeList('ranked')}>Ranked</span>
            <span className={style(styles.tab)} onClick={() => this.changeList('unranked')}>Unranked</span>
          </nav>

          {list}
        </div>
      )
    } else {
      rankingList = <Loading/>
    }

    return (
      <div>
        <h2 className={style(styles.title)}>Rankings</h2>
        {rankingList}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    rankings: state.rankings
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchRankings: params => dispatch(fetchRankings(params))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RankingsList)
