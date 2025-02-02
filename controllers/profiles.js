import { Profile } from '../models/profile.js'

function index(req, res) {
    Profile.find({})
    favorite.populate("favorites")
        .then(profiles => res.json(profiles))
        .catch(err => {
            console.log(err)
            res.status(500).json(err)
        })
}

function show(req, res) {
    Profile.findById(req.params.id)
        .populate("reviews")
        .populate("favorites")
        .populate("events")
    console.log("A list of reviews: ", profile.reviews)
        .then(profile => res.json(profile))
        .catch(err => {
            console.log(err)
            res.status(500).json(err)
        })
}

export {
    index,
    show,
}