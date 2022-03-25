import { Review } from '../models/review.js'

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
  create,
  update,
  deleteReview as delete,
}