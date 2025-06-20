
const mongoose = require('mongoose');

const rewardSchema = new mongoose.Schema({
    name: String,
    pointsRequired: Number,
    description: String
});

module.exports = mongoose.model('Reward', rewardSchema);
