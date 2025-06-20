import React, { useEffect, useState } from 'react';
import API from '../utils/api';

const QuestPage = () => {
  const [quests, setQuests] = useState([]);

  useEffect(() => {
    const fetchQuests = async () => {
      const { data } = await API.get('/quests');
      setQuests(data);
    };
    fetchQuests();
  }, []);

  return (
    <div>
      <h2>Your Quests</h2>
      <ul>
        {quests.map((q) => (
          <li key={q._id}>{q.title} - {q.description}</li>
        ))}
      </ul>
    </div>
  );
};

export default QuestPage;
