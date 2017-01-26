/* global it, expect, describe */

import {
  RANKINGS_REQUEST,
  RANKINGS_SUCCESS,
  RANKINGS_ERROR
} from '../../constants'
import reducer from '../../reducers/rankings'

describe('rankings reducer', () => {
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

  it('should handle RANKINGS_REQUEST', () => {
    expect(
      reducer([], {
        type: RANKINGS_REQUEST
      })
    ).toEqual({
      requesting: true
    })
  })

  it('should handle RANKINGS_SUCCESS', () => {
    expect(
      reducer([], {
        type: RANKINGS_SUCCESS,
        data: {
          skip: 0,
          limit: 300,
          total: 1,
          next_page: false,
          count: 1,
          summoners: [
            {
              _id: '5886db35ea01cbbe3161b080',
              createdAt: '2017-01-24T04:42:29.872Z',
              name: 'roy g biv',
              profileIconId: 7,
              summonerLevel: 30,
              summonerId: 14730709,
              userId: '5886d6dcb2d7fdf206e1a19b',
              updatedAt: '2017-01-24T04:43:00.965Z',
              active: true,
              region: 'br',
              notFound: false,
              rankedSolo: {
                elo: 3395,
                isHotStreak: false,
                losses: 17,
                wins: 22,
                lp: 65,
                division: 'III',
                tier: 'GOLD'
              },
              username: 'Bu Kinoshita',
              country: 'BR',
              state: 'São Paulo',
              city: 'São Paulo'
            }
          ]
        }
      })
    ).toEqual({
      requesting: false,
      requested: true,
      data: {
        skip: 0,
        limit: 300,
        total: 1,
        next_page: false,
        count: 1,
        summoners: [
          {
            _id: '5886db35ea01cbbe3161b080',
            createdAt: '2017-01-24T04:42:29.872Z',
            name: 'roy g biv',
            profileIconId: 7,
            summonerLevel: 30,
            summonerId: 14730709,
            userId: '5886d6dcb2d7fdf206e1a19b',
            updatedAt: '2017-01-24T04:43:00.965Z',
            active: true,
            region: 'br',
            notFound: false,
            rankedSolo: {
              elo: 3395,
              isHotStreak: false,
              losses: 17,
              wins: 22,
              lp: 65,
              division: 'III',
              tier: 'GOLD'
            },
            username: 'Bu Kinoshita',
            country: 'BR',
            state: 'São Paulo',
            city: 'São Paulo'
          }
        ]
      }
    })
  })

  it('should handle RANKINGS_ERROR', () => {
    expect(
      reducer([], {
        type: RANKINGS_ERROR,
        data: {
          message: 'You need to select a country'
        }
      })
    ).toEqual({
      requesting: false,
      data: {summoners: []},
      error: {
        message: 'You need to select a country'
      }
    })
  })
})
