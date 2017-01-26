'use strict'

import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_ERROR
} from './../constants'

const initialState = {
  requesting: false,
  requested: false,
  data: {},
  error: null
}

export default (state = initialState, { type, data }) => {
  switch (type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        requesting: true
      }

    case LOGIN_SUCCESS:
      return {
        ...state,
        requesting: false,
        requested: true,
        data
      }

    case LOGIN_ERROR:
      return {
        ...state,
        requesting: false,
        error: data
      }

    default:
      return state
  }
}
