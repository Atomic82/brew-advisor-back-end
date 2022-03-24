import mongoose from "mongoose";

const Schema = mongoose.Schema

const favoriteSchema = new Schema({
  owner: {type: Schema.Types.ObjectId, ref: "Profile"},
  /**breweryName: [] */
  // Determine whether and embedded or referenced model would work best. We should be pulling brewery's name from the YELP API
  
}, {
  timestamps: true,
})

const Favorite = mongoose.model("Favorite", favoriteSchema)

export { Favorite }
