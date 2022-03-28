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
  console.log("Show event details")
}

function update(req, res) {
  console.log("Update this event")
}

function deleteEvent(req, res) {
  console.log("Delete this event")
}

export {
  index,
  create,
  show,
  update,
  deleteEvent as delete
}