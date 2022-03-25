import mongoose from 'mongoose'

const Schema = mongoose.Schema

const reviewSchema = new Schema({
  owner: {
    type: Schema.Types.ObjectId, ref: "Profile"
  },
  comment: {
    type: String, 
    required: true
  },
  brewery: [{
    type: Schema.Types.ObjectId, ref: "Brewery"
  }]
}, {
  timestamps: true
})

const Review = mongoose.model('Review', reviewSchema)

export { Review }

