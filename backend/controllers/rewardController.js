
const Reward = require('../models/Reward');
const User = require('../models/User');

exports.getRewards = async (req, res) => {
    const rewards = await Reward.find();
    res.json(rewards);
};

exports.redeemReward = async (req, res) => {
    const { rewardId } = req.body;
    const reward = await Reward.findById(rewardId);
    const user = await User.findById(req.user._id);

    if (user.sparkPoints >= reward.pointsRequired) {
        user.sparkPoints -= reward.pointsRequired;
        await user.save();
        res.json({ message: 'Reward redeemed successfully' });
    } else {
        res.status(400).json({ error: 'Not enough points' });
    }
};
