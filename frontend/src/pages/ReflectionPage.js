import React, { useState } from 'react';
import API from '../utils/api';

const ReflectionPage = () => {
  const [form, setForm] = useState({ questId: '', text: '', imageUrl: '', audioUrl: '' });

  const handleSubmit = async () => {
    try {
      await API.post('/reflections', form);
      alert('Reflection submitted');
    } catch {
      alert('Submission failed');
    }
  };

  return (
    <div>
      <h2>Submit Reflection</h2>
      <input placeholder="Quest ID" onChange={(e) => setForm({ ...form, questId: e.target.value })} />
      <textarea placeholder="Reflection Text" onChange={(e) => setForm({ ...form, text: e.target.value })} />
      <input placeholder="Image URL" onChange={(e) => setForm({ ...form, imageUrl: e.target.value })} />
      <input placeholder="Audio URL" onChange={(e) => setForm({ ...form, audioUrl: e.target.value })} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default ReflectionPage;
