'use strict'

import {
  EDIT_USER_REQUEST,
  EDIT_USER_SUCCESS,
  EDIT_USER_ERROR
} from './../constants'

const initialState = {
  requesting: false,
  requested: false,
  data: {},
  error: null
}

export default (state = initialState, { type, data }) => {
  switch (type) {
    case EDIT_USER_REQUEST:
      return {
        ...state,
        requesting: true
      }

    case EDIT_USER_SUCCESS:
      return {
        ...state,
        requesting: false,
        requested: true,
        data
      }

    case EDIT_USER_ERROR:
      return {
        ...state,
        requesting: false,
        error: data
      }

    default:
      return state
  }
}
