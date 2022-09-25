const mongoose = require('mongoose');

const rideSchema = mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User',
        },
        time: {
            type: String,
            required: [true, 'Please add a text value'],
        },
        distance: {
            type: Number,
            required: [true, 'Please add a numerical value'],
        },
        pace: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Ride', rideSchema);
