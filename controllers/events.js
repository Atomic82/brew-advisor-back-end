import { Event } from '../models/event.js';
import { Review } from '../models/review.js'

function create(req, res) {
  console.log("Create Event")
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

// Delete
// Create
// Update
// Show

export {
  create,
  show,
  update,
  deleteEvent as delete
}