/* global it, expect, describe */

import {
  CONFIRM_SUMMONER_REQUEST,
  CONFIRM_SUMMONER_SUCCESS,
  CONFIRM_SUMMONER_ERROR
} from '../../constants'
import reducer from '../../reducers/confirm-summoner'

describe('confirm summoner reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual({
      requesting: false,
      requested: false,
      data: {},
      error: null
    })
  })

  it('should handle CONFIRM_SUMMONER_REQUEST', () => {
    expect(
      reducer([], {
        type: CONFIRM_SUMMONER_REQUEST
      })
    ).toEqual({
      requesting: true
    })
  })

  it('should handle CONFIRM_SUMMONER_SUCCESS', () => {
    expect(
      reducer([], {
        type: CONFIRM_SUMMONER_SUCCESS,
        data: {
          confirmed: true
        }
      })
    ).toEqual({
      requesting: false,
      requested: true,
      data: {
        confirmed: true
      }
    })
  })

  it('should handle CONFIRM_SUMMONER_ERROR', () => {
    expect(
      reducer([], {
        type: CONFIRM_SUMMONER_ERROR,
        data: {
          confirmed: false
        }
      })
    ).toEqual({
      requesting: false,
      error: {
        confirmed: false
      }
    })
  })
})
