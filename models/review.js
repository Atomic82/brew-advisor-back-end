import mongoose from 'mongoose'

const Schema = mongoose.Schema

const reviewSchema = new Schema({
  owner: {type: Schema.Types.ObjectId, ref: "Profile"},
  comment: {type: String, required: true},
  /** breweryName: [brewerySchema], required: true
   * Determine whether an embedded model or a referenced model would work best */
}, {
  timestamps: true
})

const Review = mongoose.model('Review', reviewSchema)

export { Review }

