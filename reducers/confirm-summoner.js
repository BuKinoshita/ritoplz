'use strict'

import {
  CONFIRM_SUMMONER_REQUEST,
  CONFIRM_SUMMONER_SUCCESS,
  CONFIRM_SUMMONER_ERROR
} from './../constants'

const initialState = {
  requesting: false,
  requested: false,
  data: {},
  error: null
}

export default (state = initialState, { type, data }) => {
  switch (type) {
    case CONFIRM_SUMMONER_REQUEST:
      return {
        ...state,
        requesting: true
      }

    case CONFIRM_SUMMONER_SUCCESS:
      return {
        ...state,
        requesting: false,
        requested: true,
        data
      }

    case CONFIRM_SUMMONER_ERROR:
      return {
        ...state,
        requesting: false,
        error: data
      }

    default:
      return state
  }
}
