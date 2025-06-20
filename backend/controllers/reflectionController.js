
const Reflection = require('../models/Reflection');

exports.submitReflection = async (req, res) => {
    const { questId, text, imageUrl, audioUrl } = req.body;
    const reflection = await Reflection.create({
        user: req.user._id,
        quest: questId,
        text,
        imageUrl,
        audioUrl
    });
    res.status(201).json(reflection);
};

exports.getReflections = async (req, res) => {
    const reflections = await Reflection.find({ user: req.user._id }).populate('quest');
    res.json(reflections);
};
