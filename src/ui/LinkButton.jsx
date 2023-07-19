import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const LinkButton = ({ children, to }) => {
  const navigate = useNavigate();
  const className = 'text-red-600 text-sm hover:text-red-800 hover:underline';
  if (to === '-1') {
    return (
      <button onClick={() => navigate(-1)} className={className}>
        &larr; Go back
      </button>
    );
  }
  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
};

export default LinkButton;
