'use strict'

import React, { Component } from 'react'
import { style, insertRule } from 'next/css'
import { connect } from 'react-redux'

import fetchRankings from '../actions/fetch-rankings'
import Header from './../components/header'
import Featured from './../components/featured'
import RankingUser from './../components/ranking-user'

const styles = {
  loading: {
    fontWeight: '300',
    textAlign: 'center',
    position: 'absolute',
    top: '40%',
    left: '0',
    right: '0',
    marginLeft: 'auto',
    marginRight: 'auto',
    color: '#333',
    fontSize: '2rem'
  }
}

class RankingsList extends Component {
  constructor() {
    super()

    this.handleFeatured = this.handleFeatured.bind(this)

    this.state = {
      summoners: [],
      featured: {},
      fetched: false
    }
  }

  componentDidMount() {
    this.props.fetchRankings().then(() => {
      this.setState({fetched: true})
    })
  }

  componentWillReceiveProps(nextProps) {
    this.setState({summoners: nextProps.rankings.data.summoners})

    if(this.state.summoners.length > 0) {
      this.handleFeatured()
    }
  }

  handleFeatured (index = 0) {
    this.setState({
      featuredPosition: index + 1,
      featured: this.state.summoners[index]
    })
  }

  render () {
    let rankingList
    let featured

    if(this.state.fetched) {
      featured = <Featured data={this.state.featured} position={this.state.featuredPosition}/>

      rankingList = this.state.summoners.map((summoner, i) => {
        return <RankingUser data={summoner} key={summoner._id} position={i + 1} avatar="https://s3.amazonaws.com/uifaces/faces/twitter/peterme/128.jpg" username="nice" handleShowFeatured={this.handleFeatured}/>
      })

    } else {
      rankingList = <h1 className={style(styles.loading)}>Loading...</h1>
    }

    return (
      <div className={style(styles.ranking)}>
        {featured}

        <ul className={style(styles.rankingList)}>
          {rankingList}
        </ul>
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
    fetchRankings: () => dispatch(fetchRankings())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RankingsList)
