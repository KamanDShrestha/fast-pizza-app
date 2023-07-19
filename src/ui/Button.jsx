import React from 'react';
import { useNavigate } from 'react-router-dom';

const Button = ({ children, disabled, to }) => {
  const navigate = useNavigate();
  const className =
    'bg-[#d92635] uppercase font-semibold inline-block px-3 py-2 rounded-full text-stone-200 hover:bg-red-700 transition-colors duration-100 focus:outline-none focus:ring focus:ring-[#d92635] focus:ring-offset-1 disabled:cursor-not-allowed';

  if (to) {
    <button className={className} onClick={() => navigate(to)}>
      {children}
    </button>;
  }

  return (
    <button disabled={disabled} className={className}>
      {children}
    </button>
  );
};

export default Button;
