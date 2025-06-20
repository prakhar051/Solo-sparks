
const mongoose = require('mongoose');

const questSchema = new mongoose.Schema({
    title: String,
    description: String,
    frequency: { type: String, enum: ['daily', 'weekly'] },
    assignedTo: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
}, { timestamps: true });

module.exports = mongoose.model('Quest', questSchema);
