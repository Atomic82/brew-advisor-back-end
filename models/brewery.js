import mongoose from 'mongoose';

const Schema = mongoose.Schema

const brewerySchema = new Schema ({
  id: {
    type: String,
  },
  name: {
    type: String,
  },
  categories: {
    type: Array,
  },
  location: {
    type: Object,
  },
  rating: {
    type: String,
  },
  url: {
    type: String,
  },
  phone: {
    type: String,
  },
  image_url: {
    type: String,
  },
  reviews: [{ type: Schema.Types.ObjectId, 
    ref: "Review" }]
}, {
  timestamps: true,
})

const Brewery = mongoose.model("Brewery", brewerySchema)

export { Brewery }