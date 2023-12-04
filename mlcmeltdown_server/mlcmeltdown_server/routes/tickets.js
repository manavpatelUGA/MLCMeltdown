const express = require('express');
const router = express.Router();

const Ticket = require('../models/Ticket');

router.get('/', (req, res) => {
    Ticket.find()
        .then((tickets) => res.json(tickets))
        .catch((err) => res.status(404).json({ noticketsfound: 'No tickets found' }));
});
router.get('/:id', (req, res) => {
    Ticket.findById(req.params.id)
        .then((ticket) => res.json(ticket))
        .catch((err) => res.status(404).json({ noticketfound: 'No ticket found' }));
});
router.post('/', (req, res) => {
    Ticket.create(req.body)
        .then((ticket) => res.json({ msg: 'Ticket added successfully' }))
        .catch((err) => res.status(400).json({ error: 'Unable to add this ticket' }));
});
router.put('/:id', (req, res) => {
    Ticket.findByIdAndUpdate(req.params.id, req.body)
        .then((ticket) => res.json({ msg: 'Updated successfully' }))
        .catch((err) => res.status(400).json({ error: 'Unable to update the database' }));
});
router.delete('/:id', (req, res) => {
    Ticket.findByIdAndDelete(req.params.id)
        .then((ticket) => res.json({ msg: 'Ticket deleted successfully' }))
        .catch((err) => res.status(404).json({ error: 'No such ticket' }));
});
module.exports = router;
