import { Profile } from '../models/profile.js'
import { Review } from '../models/review.js'

function index(req, res) {
  Profile.find({})
  .populate("reviews")
  .then(profiles => res.json(profiles))
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
}

function show(req, res) {
  Profile.findById(req.params.id)
  .populate("reviews")
  .populate("favorites")
  .populate("events")
  .then(profile => res.json(profile))
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
}

export { 
  index,
  show,
}
