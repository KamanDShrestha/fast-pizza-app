import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { formatCurrency } from '../../utils/helpers';
import { getTotalCartPrice, getTotalCartQuantity } from './cartSlice';
function CartOverview() {
  const cartTotalQuantity = useSelector(getTotalCartQuantity);

  const cartTotalPrice = useSelector(getTotalCartPrice);

  return (
    <>
      <div className='bg-black text-stone-200 px-4 py-3 sm:px-8 sm:py-5 text-sm md:text-base flex justify-between'>
        <p className='space-x-4 sm:space-x-8 '>
          <span className='font-semibold'>{cartTotalQuantity} pizzas</span>
          <span>{formatCurrency(cartTotalPrice)}</span>
        </p>
        <Link to='/cart'>Open cart &rarr;</Link>
      </div>
    </>
  );
}

export default CartOverview;
