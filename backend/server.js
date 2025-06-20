
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const { connectDB } = require('./config/db');
const authRoutes = require('./routes/auth');
const questRoutes = require('./routes/quests');
const reflectionRoutes = require('./routes/reflections');
const rewardRoutes = require('./routes/rewards');

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/quests', questRoutes);
app.use('/api/reflections', reflectionRoutes);
app.use('/api/rewards', rewardRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
