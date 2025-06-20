import React, { useState } from 'react';
import API from '../utils/api';
import { useNavigate } from 'react-router-dom';

const Onboarding = () => {
  const [mood, setMood] = useState('');
  const [traits, setTraits] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      await API.put('/auth/profile', { mood, personalityTraits: traits });
      navigate('/dashboard');
    } catch {
      alert('Failed to save onboarding info');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">Complete Your Profile</h2>
      <input
        className="w-full p-2 mb-4 border"
        placeholder="Current Mood"
        value={mood}
        onChange={(e) => setMood(e.target.value)}
      />
      <textarea
        className="w-full p-2 mb-4 border"
        placeholder="Personality Traits"
        value={traits}
        onChange={(e) => setTraits(e.target.value)}
      />
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded"
        onClick={handleSubmit}
      >
        Save & Continue
      </button>
    </div>
  );
};

export default Onboarding;
