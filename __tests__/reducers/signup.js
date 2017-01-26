/* global it, expect, describe */

import {
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR
} from '../../constants'
import reducer from '../../reducers/signup'

describe('signup reducer', () => {
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

  it('should handle SIGNUP_REQUEST', () => {
    expect(
      reducer([], {
        type: SIGNUP_REQUEST
      })
    ).toEqual({
      requesting: true
    })
  })

  it('should handle SIGNUP_SUCCESS', () => {
    expect(
      reducer([], {
        type: SIGNUP_SUCCESS,
        data: {
          token: 'token1234',
          user: {
            updatedAt: '2016-12-25T16:16:03.939Z',
            createdAt: '2016-12-25T16:16:03.939Z',
            name: 'Ritoplz',
            email: 'ritoplz@ritoplz.com',
            _id: '585ff0c3214de06b70e8aee2',
            emailConfirmed: false
          }
        }
      })
    ).toEqual({
      requesting: false,
      requested: true,
      data: {
        token: 'token1234',
        user: {
          updatedAt: '2016-12-25T16:16:03.939Z',
          createdAt: '2016-12-25T16:16:03.939Z',
          name: 'Ritoplz',
          email: 'ritoplz@ritoplz.com',
          _id: '585ff0c3214de06b70e8aee2',
          emailConfirmed: false
        }
      }
    })
  })

  it('should handle SIGNUP_ERROR', () => {
    expect(
      reducer([], {
        type: SIGNUP_ERROR,
        data: {
          message: 'Email cannont be blank'
        }
      })
    ).toEqual({
      requesting: false,
      error: {
        message: 'Email cannont be blank'
      }
    })
  })
})
