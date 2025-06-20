import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import API from '../utils/api';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale);

const ProgressPage = () => {
  const [data, setData] = useState({ labels: [], values: [] });

  useEffect(() => {
    const fetch = async () => {
      const res = await API.get('/reflections');
      const grouped = {};
      res.data.forEach(r => {
        const date = new Date(r.submittedAt).toLocaleDateString();
        grouped[date] = (grouped[date] || 0) + 1;
      });
      setData({
        labels: Object.keys(grouped),
        values: Object.values(grouped)
      });
    };
    fetch();
  }, []);

  return (
    <div className="max-w-xl mx-auto mt-10">
      <h2 className="text-xl font-bold mb-4 text-center">Your Progress</h2>
      <Bar
        data={{
          labels: data.labels,
          datasets: [
            {
              label: 'Reflections Submitted',
              data: data.values,
              backgroundColor: '#3b82f6',
            }
          ]
        }}
      />
    </div>
  );
};

export default ProgressPage;
