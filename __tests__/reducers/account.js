/* global it, expect, describe */

import {
  ACCOUNT_REQUEST,
  ACCOUNT_SUCCESS,
  ACCOUNT_ERROR
} from '../../constants'
import reducer from '../../reducers/account'

describe('account reducer', () => {
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

  it('should handle ACCOUNT_REQUEST', () => {
    expect(
      reducer([], {
        type: ACCOUNT_REQUEST
      })
    ).toEqual({
      requesting: true
    })
  })

  it('should handle ACCOUNT_SUCCESS', () => {
    expect(
      reducer([], {
        type: ACCOUNT_SUCCESS,
        data: {
          user: {
            _id: '5886d6dcb2d7fdf206e1a19b',
            updatedAt: '2017-01-24T04:23:56.682Z',
            createdAt: '2017-01-24T04:23:56.682Z',
            name: 'Bu Kinoshita',
            email: 'bukinoshita@gmail.com',
            city: 'São Paulo',
            country: 'BR',
            state: 'São Paulo',
            emailConfirmed: false
          },
          summoners: [
            {
              name: 'Ritoplz',
              code: '51DF',
              active: false
            }
          ]
        }
      })
    ).toEqual({
      requesting: false,
      requested: true,
      data: {
        user: {
          _id: '5886d6dcb2d7fdf206e1a19b',
          updatedAt: '2017-01-24T04:23:56.682Z',
          createdAt: '2017-01-24T04:23:56.682Z',
          name: 'Bu Kinoshita',
          email: 'bukinoshita@gmail.com',
          city: 'São Paulo',
          country: 'BR',
          state: 'São Paulo',
          emailConfirmed: false
        },
        summoners: [
          {
            name: 'Ritoplz',
            code: '51DF',
            active: false
          }
        ]
      }
    })
  })

  it('should handle ACCOUNT_ERROR', () => {
    expect(
      reducer([], {
        type: ACCOUNT_ERROR,
        data: {
          message: 'This is an error'
        }
      })
    ).toEqual({
      requesting: false,
      error: {
        message: 'This is an error'
      }
    })
  })
})
