import { Review } from '../models/review.js'

function index(req, res) {
  console.log("See these reviews")
  // Review.find({})
  // .populate("owner", "brewery")
  // .then(reviews => {
  //   res.json(reviews)
  // })
  // .catch(err => {
  //   console.log(err)
  //   res.status(500).json(err)
  // })
}

function create (req, res) {
  req.body.owner = req.user.profile
  Review.create(req.body)
  console.log(req.body)
  .then(review => {
    review.populate("owner", "brewery")
    .then(populatedReview => {
      res.status(201).json(populatedReview)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json(err)
    })
  })
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
}
function update (req, res) {
  console.log("Update a review")
}

function deleteReview (req, res) {
  console.log("Delete this review")
}


export {
  index,
  create,
  update,
  deleteReview as delete,
}