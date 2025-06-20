import React, { useEffect, useState } from 'react';
import API from '../utils/api';

const RewardsPage = () => {
  const [rewards, setRewards] = useState([]);

  useEffect(() => {
    const fetchRewards = async () => {
      const { data } = await API.get('/rewards');
      setRewards(data);
    };
    fetchRewards();
  }, []);

  const redeem = async (id) => {
    try {
      await API.post('/rewards/redeem', { rewardId: id });
      alert('Reward redeemed!');
    } catch {
      alert('Failed to redeem reward');
    }
  };

  return (
    <div>
      <h2>Rewards</h2>
      {rewards.map((r) => (
        <div key={r._id}>
          <p>{r.name} - {r.pointsRequired} pts</p>
          <button onClick={() => redeem(r._id)}>Redeem</button>
        </div>
      ))}
    </div>
  );
};

export default RewardsPage;
