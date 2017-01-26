/* global it, expect, describe */

import {
  EDIT_USER_REQUEST,
  EDIT_USER_SUCCESS,
  EDIT_USER_ERROR
} from '../../constants'
import reducer from '../../reducers/edit-user'

describe('edit user reducer', () => {
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

  it('should handle EDIT_USER_REQUEST', () => {
    expect(
      reducer([], {
        type: EDIT_USER_REQUEST
      })
    ).toEqual({
      requesting: true
    })
  })

  it('should handle EDIT_USER_SUCCESS', () => {
    expect(
      reducer([], {
        type: EDIT_USER_SUCCESS,
        data: {
          user: {
            country: 'BR',
            state: 'São Paulo',
            city: 'São Paulo',
            _id: '5886d6dcb2d7fdf206e1a19b',
            updatedAt: '2017-01-24T04:37:50.672Z',
            createdAt: '2017-01-24T04:23:56.682Z',
            name: 'Bu Kinoshita',
            email: 'bukinoshita@gmail.com',
            emailConfirmed: false
          },
          message: 'Profile information updated.'
        }
      })
    ).toEqual({
      requesting: false,
      requested: true,
      data: {
        user: {
          country: 'BR',
          state: 'São Paulo',
          city: 'São Paulo',
          _id: '5886d6dcb2d7fdf206e1a19b',
          updatedAt: '2017-01-24T04:37:50.672Z',
          createdAt: '2017-01-24T04:23:56.682Z',
          name: 'Bu Kinoshita',
          email: 'bukinoshita@gmail.com',
          emailConfirmed: false
        },
        message: 'Profile information updated.'
      }
    })
  })

  it('should handle EDIT_USER_ERROR', () => {
    expect(
      reducer([], {
        type: EDIT_USER_ERROR,
        data: {
          message: 'You must select a city'
        }
      })
    ).toEqual({
      requesting: false,
      error: {
        message: 'You must select a city'
      }
    })
  })
})
