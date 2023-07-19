import React from 'react';
import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';
import UserName from '../features/user/UserName';

const Header = () => {
  return (
    <>
      <header className=' flex flex-col items-center justify-center min-[390px]:flex-row min-[390px]:items-center min-[390px]:justify-between gap-6 bg-[#d92635] uppercase tracking-widest p-4  border-b-2 border-stone-200 sm:p-6 text-stone-200'>
        <Link to='/'> Fast Pizza Ltd.</Link>

        <SearchOrder />
        <UserName />
      </header>
    </>
  );
};

export default Header;
