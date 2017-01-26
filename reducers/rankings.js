'use strict'

import {
  RANKINGS_REQUEST,
  RANKINGS_SUCCESS,
  RANKINGS_ERROR
} from './../constants'

const initialState = {
  requesting: false,
  requested: false,
  data: {},
  error: null
}

export default (state = initialState, { type, data }) => {
  switch (type) {
    case RANKINGS_REQUEST:
      return {
        ...state,
        requesting: true
      }

    case RANKINGS_SUCCESS:
      return {
        ...state,
        requesting: false,
        requested: true,
        data
      }

    case RANKINGS_ERROR:
      return {
        ...state,
        requesting: false,
        error: data,
        data: {summoners: []}
      }

    default:
      return state
  }
}
