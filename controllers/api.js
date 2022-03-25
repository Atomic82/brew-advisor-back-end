import fetch from 'node-fetch'

const BASE_URL = 'https://api.yelp.com/v3/businesses/search?term=brewery&location=snellville&radius=40000'
const BEARER = process.env.API_BEARER

function getBreweries(req, res){
  return fetch(BASE_URL, {
    headers: {
      'Authorization': `Bearer ${BEARER}`
    },
    mode: 'cors'
  })
    .then(response => response.json())
    .then(data => res.json(data))

}

export {
  getBreweries
}