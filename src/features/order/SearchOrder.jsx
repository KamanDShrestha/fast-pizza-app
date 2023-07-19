import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchOrder = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery('');
  }
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        placeholder='Search Order'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className='rounded-full w-45 sm:w-60 sm:focus:w-72 h-9 p-3 transition:all duration-300 focus:outline-none focus:ring focus:ring-red-400 placeholder:text-sm placeholder:text-stone-400 text-slate-600 text-sm'
      />
    </form>
  );
};

export default SearchOrder;
