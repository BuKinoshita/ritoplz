'use strict'

import cookie from 'react-cookie'

export const getToken = () => {
  return cookie.load('token')
}

export const setToken = token => {
  return cookie.save('token', token, {path: '/'})
}

export const logout = () => {
  return cookie.remove('token', {path: '/'})
}

export const isLogged = () => {
  const token = getToken()

  return !!token
}

export const tutorialStatus = () => {
  return cookie.load('tutorial')
}

export const toggleTutorial = checker => {
  if (checker) {
    cookie.save('tutorial', true, {path: '/'})
  } else {
    cookie.remove('tutorial', {path: '/'})
  }
}
