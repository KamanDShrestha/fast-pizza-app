import React from 'react';
import Header from './Header';
import { Outlet, useNavigation } from 'react-router-dom';
import CartOverview from '../features/cart/CartOverview';
import Loader from './Loader';
const AppLayout = () => {
  const loadingState = useNavigation();
  const isLoading = loadingState.state === 'loading';
  return (
    <div className='grid grid-rows-[auto_1fr_auto] h-screen'>
      {isLoading && <Loader />}
      <Header />
      <div className='overflow-scroll bg-stone-100'>
        <Outlet />
      </div>
      <CartOverview />
    </div>
  );
};

export default AppLayout;
