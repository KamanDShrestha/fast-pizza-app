import { useSelector } from 'react-redux';
import CreateOrder from '../features/order/CreateOrder';
import CreateUser from '../features/user/CreateUser';
import { useEffect } from 'react';
import Button from './Button';
const API_KEY = 'AIzaSyC2FifrFWAqtlZx1OvZM_ULYpQco8FeetY';

function Home() {
  const userName = useSelector((store) => store.user.userName);

  return (
    <div className='text-center my-4 sm:my-14 px-4 sm:px-8'>
      <h1 className=' font-semibold  mb-14 text-3xl '>
        The best pizza.
        <br />
        <span className='text-[#E98816] text text-xl'>
          Straight out of the oven, straight to you.
        </span>
      </h1>
      {userName ? (
        <Button to={'/menu'} type={'primary'}>
          Continue ordering
        </Button>
      ) : (
        <CreateUser />
      )}
    </div>
  );
}

export default Home;
