import React from 'react';
import Header from './Header';
import { Outlet, useNavigation } from 'react-router-dom';
import CartOverview from '../features/cart/CartOverview';
import Loader from './Loader';
import { useSelector } from 'react-redux';
import { getTotalCartQuantity } from '../features/cart/cartSlice';
const AppLayout = () => {
  const loadingState = useNavigation();
  const isLoading = loadingState.state === 'loading';
  const cartQuantity = useSelector(getTotalCartQuantity);
  return (
    <div className='grid grid-rows-[auto_1fr_auto] h-screen'>
      {isLoading && <Loader />}
      <Header />
      <div className='overflow-scroll bg-stone-100'>
        <Outlet />
      </div>

      {cartQuantity !== 0 && <CartOverview />}
    </div>
  );
};

export default AppLayout;
