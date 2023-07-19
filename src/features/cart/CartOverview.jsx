import { Link } from 'react-router-dom';

function CartOverview() {
  return (
    <>
      <div className='bg-black text-stone-200 px-4 py-3 sm:px-8 sm:py-5 text-sm md:text-base flex justify-between'>
        <p className='space-x-4 sm:space-x-8 '>
          <span className='font-semibold'>23 pizzas</span>
          <span>$23.45</span>
        </p>
        <Link to='/cart'>Open cart &rarr;</Link>
      </div>
    </>
  );
}

export default CartOverview;
