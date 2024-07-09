// src/components/LogoutButton.jsx
import React from 'react';
import { useConnect } from '@connect2ic/react';
import '@connect2ic/core/style.css';

const LogoutButton = () => {
  const { disconnect } = useConnect();

  const handleLogout = () => {
    disconnect();
  };

  return (
    <button
      className="btn btn-danger logout-button"
      onClick={handleLogout}
      aria-label="Logout"
    >
      Logout
    </button>
  );
};

export default LogoutButton;
