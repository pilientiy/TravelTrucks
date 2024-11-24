// src/pages/HomePage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Welcome to TravelTrucks</h1>
      <button onClick={() => navigate('/catalog')}>View Now</button>
    </div>
  );
};

export default HomePage;
