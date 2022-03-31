import { Favorite } from '../models/favorites.js'

function create(req, res) {
    req.body.owner = req.user.profile
    Favorite.create(req.body)
        .then(favorite => {
            favorite.populate("owner")
            favorite.populate("brewery")
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