'use strict'

import axios from 'axios'

import * as types from './../constants'

function rankingsRequest() {
  return {
    type: types.RANKINGS_REQUEST
  }
}

function rankingsSuccess(data) {
  return {
    type: types.RANKINGS_SUCCESS,
    data
  }
}

function rankingsError(data) {
  return {
    type: types.RANKINGS_ERROR,
    data
  }
}

function fetchRankings() {
  return dispatch => {
    dispatch(rankingsRequest())
    return axios.get('https://staging.ritoplz.com/rankings', {
      params: { 
        country: 'BR'
      }
    })
    .then(res => dispatch(rankingsSuccess(res.data)))
    .catch(res => dispatch(rankingsError(res)))
  }
}

export default fetchRankings
