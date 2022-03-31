import { Favorite } from '../models/favorite.js'

function create(req, res) {
    req.body.owner = req.user.profile
    Favorite.create(req.body)
        .then(favorite => {
            favorite.populate("owner")
                .then(populateFavorite => {
                    res.status(201).json(populatedFavorite)
                })
                .catch(err => {
                    console.log(err)
                    res.status(500).json(err)
                })
        })
        .catch(err => {
            console.log(err)
            res.status(500).json(err)
        })
}

export { create }