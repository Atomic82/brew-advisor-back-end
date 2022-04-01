import mongoose from "mongoose";

const Schema = mongoose.Schema

const favoriteSchema = new Schema({
  owner: [{type: Schema.Types.ObjectId, ref: "Profile"}],
  breweryName:{type: String}}, {
    timestamps: true,
  })

const Favorite = mongoose.model("Favorite", favoriteSchema)

export { Favorite }
