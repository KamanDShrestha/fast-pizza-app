import React from 'react';
import { useNavigate } from 'react-router-dom';

const Button = ({ children, disabled, to, type, onButtonClick }) => {
  const navigate = useNavigate();

  const base =
    'bg-[#d92635] text-sm uppercase font-semibold inline-block rounded-full text-stone-200 hover:bg-red-700 transition-colors duration-100 focus:outline-none focus:ring focus:ring-[#d92635] focus:ring-offset-1 disabled:cursor-not-allowed';

  const styles = {
    primary: base + ' px-4 py-3 md:px-6 md:py-4',
    small: base + ' px-3 py-2 md:px-4 md:py-2.5 text-xs',
    secondary:
      ' uppercase text-sm font-semibold inline-block rounded-full border-2  text-stone-700 hover:bg-stone-300 transition-colors duration-100 focus:outline-none focus:ring focus:ring-stone-300 focus:ring-offset-1 disabled:cursor-not-allowed px-3 py-2 md:px-4 md:py-3',
  };

  if (to) {
    return (
      <button className={styles[type]} onClick={() => navigate(to)}>
        {children}
      </button>
    );
  }

  return (
    <button
      disabled={disabled}
      className={styles[type]}
      onClick={onButtonClick}
    >
      {children}
    </button>
  );
};

export default Button;
