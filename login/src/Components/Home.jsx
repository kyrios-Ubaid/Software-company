import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
   
    localStorage.removeItem("token");


    navigate('/'); 
  };
  useEffect(() => {
    if (token === null) {
      navigate('/');
    }
  },  navigate);

  return (
    <>
      <h1>THis is Dashbord</h1>
      <button onClick={handleLogout}>Logout</button>
    </>
  );
}

export default Home;
