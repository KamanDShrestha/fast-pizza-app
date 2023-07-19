import CreateOrder from '../features/order/CreateOrder';
import CreateUser from '../features/user/CreateUser';
import { useEffect } from 'react';
const API_KEY = 'AIzaSyC2FifrFWAqtlZx1OvZM_ULYpQco8FeetY';

function Home() {
  useEffect(() => {
    const data = fetch(
      `https://www.googleapis.com/books/v1/volumes?q=subject:fiction&maxResults=40&startIndex=0&key=${API_KEY}`
    )
      .then((res) => res.json)
      .then((data) => data);
    console.log(data);
  }, []);

  return (
    <div className='text-center my-4 sm:my-14 px-4 sm:px-8'>
      <h1 className='text-xl font-semibold  mb-14 '>
        The best pizza.
        <br />
        <span className='text-[#E98816]'>
          Straight out of the oven, straight to you.
        </span>
      </h1>
      <CreateUser />
    </div>
  );
}

export default Home;
