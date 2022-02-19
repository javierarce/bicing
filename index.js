'use strict'

const request = require('request')
const rq = require('request-promise-native')

const URL = 'https://bicing.barcelona/get-stations'

const get = () => {
  let options = { 
    method: 'GET',
    url: URL
  }

  return rq(options)
    .then(result => {
      let response = {}

      result = JSON.parse(result)

      if (result && result.stations) {
        return result.stations
      }

      return response
    }).catch((e) => {
      console.log(e);
    })
}

module.exports = { get }
