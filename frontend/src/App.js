import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import QuestPage from './pages/QuestPage';
import ReflectionPage from './pages/ReflectionPage';
import RewardsPage from './pages/RewardsPage';
import Onboarding from './pages/Onboarding';
import ProgressPage from './pages/ProgressPage';

const App = () => (
  <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/quest" element={<QuestPage />} />
    <Route path="/reflect" element={<ReflectionPage />} />
    <Route path="/rewards" element={<RewardsPage />} />
    <Route path="/onboarding" element={<Onboarding />} />
    <Route path="/progress" element={<ProgressPage />} />
  </Routes>
);

export default App;
