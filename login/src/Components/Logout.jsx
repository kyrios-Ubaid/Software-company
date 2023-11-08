import React from 'react';
import { useNavigate } from 'react-router-dom';

function Logout() {
  const navigate = useNavigate();

  const handleLogout = () => {
   
    localStorage.removeItem("token");


    navigate('/'); 
  };

  return (
    <div>
      <p>Are you sure you want to log out?</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Logout;
