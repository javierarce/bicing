'use strict'

const request = require('request')
const rq = require('request-promise-native')

const URL = 'https://bicing.barcelona/get-stations'
const EXCLUDED_PARAMS = ['url_icon', 'url_icon2', 'url_icon3', 'url_icon4', 'url_icon5', 'estacions_icon', 'parametros_filtro']

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
        EXCLUDED_PARAMS.forEach((param) => {
          if (result.hasOwnProperty(param)) {
            delete result[param]
          }
        })

        return result
      }

      return response
    }).catch((e) => {
      console.log(e);
    })
}

module.exports = { get }
