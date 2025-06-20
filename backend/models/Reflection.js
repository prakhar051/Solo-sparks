
const mongoose = require('mongoose');

const reflectionSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    quest: { type: mongoose.Schema.Types.ObjectId, ref: 'Quest' },
    text: String,
    imageUrl: String,
    audioUrl: String,
    submittedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Reflection', reflectionSchema);
