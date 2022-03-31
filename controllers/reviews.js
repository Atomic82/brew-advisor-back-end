import { Review } from '../models/review.js'
import { Profile } from '../models/profile.js'


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
  req.body.owner = req.user.profile
  Review.create(req.body)
  .then(initialReview => {
    initialReview.populate("owner")
    initialReview.populate("brewery")
    initialReview.populate("comment")
    .then(finalReview => {
      Profile.findById(req.params.id)
      .populate("reviews")
      .then(profile => {
        if(profile.equals(finalReview.owner)){
          profile.reviews.push(finalReview)
          profile.save()
          .then(populatedProfile => {
            
            res.status(201).json(finalReview)
          })
          .catch(err => {
            console.log(err)
            res.status(500).json(err)
          })
        }
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