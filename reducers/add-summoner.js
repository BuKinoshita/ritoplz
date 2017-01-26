'use strict'

import {
  ADD_SUMMONER_REQUEST,
  ADD_SUMMONER_SUCCESS,
  ADD_SUMMONER_ERROR
} from './../constants'

const initialState = {
  requesting: false,
  requested: false,
  data: {},
  error: null
}

export default (state = initialState, { type, data }) => {
  switch (type) {
    case ADD_SUMMONER_REQUEST:
      return {
        ...state,
        requesting: true
      }

    case ADD_SUMMONER_SUCCESS:
      return {
        ...state,
        requesting: false,
        requested: true,
        data
      }

    case ADD_SUMMONER_ERROR:
      return {
        ...state,
        requesting: false,
        error: data
      }

    default:
      return state
  }
}
