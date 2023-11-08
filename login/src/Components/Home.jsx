import React from 'react';
import {  useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const loggedin = token !== null; // Check if the token is not null

  if (!loggedin) {
    navigate('/');
    return null; // You might want to return null or another component when not logged in
  }

  return (
    <div>Home</div>
  );
}

export default Home;
