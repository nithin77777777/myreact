import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Dashboard</h1>
      <div onClick={() => navigate('/map')} style={{ cursor: 'pointer', border: '1px solid black', padding: '10px' }}>
        Click here to view the map
      </div>
    </div>
  );
};

export default Dashboard;
