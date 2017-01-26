/* global it, expect, describe */

import {
  ADD_SUMMONER_REQUEST,
  ADD_SUMMONER_SUCCESS,
  ADD_SUMMONER_ERROR
} from '../../constants'
import reducer from '../../reducers/add-summoner'

describe('add summoner reducer', () => {
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

  it('should handle ADD_SUMMONER_REQUEST', () => {
    expect(
      reducer([], {
        type: ADD_SUMMONER_REQUEST
      })
    ).toEqual({
      requesting: true
    })
  })

  it('should handle ADD_SUMMONER_SUCCESS', () => {
    expect(
      reducer([], {
        type: ADD_SUMMONER_SUCCESS,
        data: {
          code: '51DF'
        }
      })
    ).toEqual({
      requesting: false,
      requested: true,
      data: {
        code: '51DF'
      }
    })
  })

  it('should handle ADD_SUMMONER_ERROR', () => {
    expect(
      reducer([], {
        type: ADD_SUMMONER_ERROR,
        data: {
          message: 'Summoner name cannot be blank'
        }
      })
    ).toEqual({
      requesting: false,
      error: {
        message: 'Summoner name cannot be blank'
      }
    })
  })
})
