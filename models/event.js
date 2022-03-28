import mongoose from 'mongoose'

const Schema = mongoose.Schema

const eventSchema = new Schema({
  owner: [{
    type: Schema.Types.ObjectId, 
    ref: "Profile"
  }],
  name: {
    type: String,
    required: true
  },
  timeDate: {
    type: String, 
    required: true
  },
  confirmedGuests: [{
    type: Schema.Types.ObjectId, 
    ref: "Profile",
  }],
  reviews: [{
    type: Schema.Types.ObjectId, 
    ref: "Review"
  }],
  brewery: [{
    type: Schema.Types.ObjectId, 
    ref: "Brewery"
  }]
}, {
  timestamps: true,
})

const Event = mongoose.model("Event", eventSchema)

export { Event }