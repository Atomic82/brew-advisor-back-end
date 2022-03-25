import mongoose from 'mongoose'

const Schema = mongoose.Schema

const profileSchema = new Schema({
  email: {type: String, required: true, lowercase: true, unique: true},
  name: String,
  favorites: {type: Schema.Types.ObjectId, ref: "Favorite"},
  reviews: {type: Schema.Types.ObjectId, ref: "Review"},
  events: {type: Schema.Types.ObjectId, ref: "Event"} 
},{
    timestamps: true,
})

const Profile = mongoose.model('Profile', profileSchema)

export {Profile}
