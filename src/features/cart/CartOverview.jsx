import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { formatCurrency } from '../../utils/helpers';
function CartOverview() {
  const cartTotalQuantity = useSelector((store) =>
    store.cart.cart.reduce((sum, item) => sum + item.quantity, 0)
  );

  const cartTotalPrice = useSelector((store) =>
    store.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0)
  );

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
