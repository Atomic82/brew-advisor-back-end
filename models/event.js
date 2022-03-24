import mongoose, { Schema } from 'mongoose'

const eventSchema = new mongoose.Schema({
  owner: {type: Schema.Types.ObjectId, ref: "Profile"},
  timeDate: {type: String, required: true},
  confirmedGuests: {type: Schema.Types.ObjectId, ref: "Profile"},
  reviews: {type: Schema.Types.ObjectId, ref: "Review"},
  brewery: [brewerySchema]
}, {
  timestamps: true,
})

const Event = mongoose.model("Event", eventSchema)

export { Event }