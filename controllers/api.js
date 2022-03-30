import fetch from 'node-fetch'
const BASE_URL = 'https://api.yelp.com/v3/businesses'
const BEARER = process.env.API_BEARER

function getBreweries(req, res){
  //search?term=brewery&location=${req.body}&radius=40000
  //search?term=brewery&location=snellville&radius=40000
  console.log(req.body)

  return fetch(`${BASE_URL}/search?term=brewery&location=${req.body.location}&radius=40000`, {
    headers: {
      'Authorization': `Bearer ${BEARER}`
    },
    mode: 'cors'
  })
    .then(response => response.json())
    .then(data => res.json(data))
}

function getSingleBrewery(req, res){
  const brewery_id = req.body.brewery_id
  return fetch(`${BASE_URL}/${brewery_id}`, {
    headers: {
      'Authorization': `Bearer ${BEARER}`
    },
    mode: 'cors'
  })
    .then(response => response.json())
    .then(data => res.json(data))
}

export {
  getBreweries,
  getSingleBrewery
}