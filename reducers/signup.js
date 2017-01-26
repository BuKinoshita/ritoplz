'use strict'

import {
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR
} from './../constants'

const initialState = {
  requesting: false,
  requested: false,
  data: {},
  error: null
}

export default (state = initialState, { type, data }) => {
  switch (type) {
    case SIGNUP_REQUEST:
      return {
        ...state,
        requesting: true
      }

    case SIGNUP_SUCCESS:
      return {
        ...state,
        requesting: false,
        requested: true,
        data
      }

    case SIGNUP_ERROR:
      return {
        ...state,
        requesting: false,
        error: data
      }

    default:
      return state
  }
}
