import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    
    if (window.location.pathname === '/') {
     
      navigate('/register');
    }
  }, [navigate]);

  return (
    <div>
     <></>
    </div>
  );
}

export default Dashboard;