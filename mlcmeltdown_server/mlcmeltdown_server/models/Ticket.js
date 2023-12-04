const mongoose = require('mongoose');

const TicketSchema = new mongoose.Schema({
    roomNum: {
        type: Number,
        required: true
    },
    peopleNum: {
        type: Number
    },
    startTime: {
        type: String
    },
    endTime: {
        type: String
    },
    roomVolume: {
        type: String
    }
});

module.exports = Ticket = mongoose.model('ticket', TicketSchema);