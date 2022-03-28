import { Event } from '../models/event.js';
import { Review } from '../models/review.js'

function index(req, res) {
  Event.find({})
    .populate('owner', )//'confirmedGuests',) //'brewery')
    .then(events => {
      res.json(events)
    })
    .catch(err => {
      res.json(err)
    })
}

function create(req, res) {
  console.log(req.body)
  req.body.owner = req.user.profile
  Event.create(req.body)
    .then(event => {
      event.populate('owner',) //'brewery')
      .then(populatedEvent => {
        res.status(201).json(populatedEvent)
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

function show(req, res) {
  Event.findById(req.params.id)
  .then(event => res.json(event))
  .catch(err => res.json(err))
}

function update(req, res) {
  Event.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(event => {
      event.populate('owner',) //'brewery')
      .then(populatedEvent => {
        res.status(201).json(populatedEvent)
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

function deleteEvent(req, res) {
  Event.findByIdAndDelete(req.params.id)
  .then(event => res.json(event))
  .catch(err => res.json(err))
}

export {
  index,
  create,
  show,
  update,
  deleteEvent as delete
}