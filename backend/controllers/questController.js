
const Quest = require('../models/Quest');

exports.getQuests = async (req, res) => {
    const quests = await Quest.find({ assignedTo: req.user._id });
    res.json(quests);
};

exports.createQuest = async (req, res) => {
    const { title, description, frequency } = req.body;
    const quest = await Quest.create({
        title,
        description,
        frequency,
        assignedTo: [req.user._id]
    });
    res.status(201).json(quest);
};
