import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Dashboard</h2>
      <button onClick={() => navigate('/quest')}>Today's Quest</button>
      <button onClick={() => navigate('/reflect')}>Submit Reflection</button>
      <button onClick={() => navigate('/rewards')}>Rewards</button>
      <button onClick={() => navigate('/onboarding')}>Onboarding</button>
      <button onClick={() => navigate('/progress')}>View Progress</button>

    </div>
  );
};

export default Dashboard;
