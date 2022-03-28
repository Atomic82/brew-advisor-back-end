import { Review } from '../models/review.js'

function index(req, res) {
  Review.find({})
  .populate("owner", "brewery")
  .then(reviews => {
    res.json(reviews)
  })
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
}

function create (req, res) {
  console.log("Create a review")
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