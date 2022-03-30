import mongoose from 'mongoose'

const Schema = mongoose.Schema

const eventCommentSchema = new Schema ({
  owner: [{
    type: Schema.Types.ObjectId, 
    ref: "Profile"
  }],
  comment: {
    type: String,
    required: true
  }
}, {
  timestamps: true
})

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
    type: Date, 
    required: true
  },
  confirmedGuests: [{
    type: Schema.Types.ObjectId, 
    ref: "Profile",
  }],
  comments: [eventCommentSchema],
  brewery: {
    type: String, 
  }
}, {
  timestamps: true,
})

const Event = mongoose.model("Event", eventSchema)

export { Event }