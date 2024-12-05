import React from 'react';
import { Button } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-blue-100 to-blue-50">
      <h1 className="text-6xl font-bold text-blue-600 mb-4">404</h1>
      <p className="text-lg text-gray-700 mb-6">Oops! The page you're looking for doesn't exist.</p>
      <Button
        variant="contained"
        startIcon={<HomeIcon />}
        className="bg-gradient-to-r from-blue-600 to-cyan-400 text-white"
        onClick={() => navigate('/')}
      >
        Go Home
      </Button>
    </div>
  );
};

export default NotFoundPage;
