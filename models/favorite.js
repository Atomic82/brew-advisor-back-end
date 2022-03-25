import mongoose from "mongoose";

const Schema = mongoose.Schema

const favoriteSchema = new Schema({
  owner: [{type: Schema.Types.ObjectId, ref: "Profile"}],
  breweryName: [{type: Schema.Types.ObjectId, ref: "Brewery"}],
}, {
  timestamps: true,
})

const Favorite = mongoose.model("Favorite", favoriteSchema)

export { Favorite }
