'use strict'

import {
  ACCOUNT_REQUEST,
  ACCOUNT_SUCCESS,
  ACCOUNT_ERROR
} from './../constants'

const initialState = {
  requesting: false,
  requested: false,
  data: {},
  error: null
}

export default (state = initialState, { type, data }) => {
  switch (type) {
    case ACCOUNT_REQUEST:
      return {
        ...state,
        requesting: true
      }

    case ACCOUNT_SUCCESS:
      return {
        ...state,
        requesting: false,
        requested: true,
        data
      }

    case ACCOUNT_ERROR:
      return {
        ...state,
        requesting: false,
        error: data
      }

    default:
      return state
  }
}
