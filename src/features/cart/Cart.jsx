import { Link } from 'react-router-dom';
import Button from '../../ui/Button';
import LinkButton from '../../ui/LinkButton';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';

function Cart() {
  const cart = useSelector((store) => store.cart.cart);
  const userName = useSelector((store) => store.user.userName);
  console.log(cart);
  return (
    <div className='px-4 '>
      <LinkButton
        to='/menu'
        className=' text-blue-500 hover:text-blue-700 hover:underline'
      >
        &larr; Back to menu
      </LinkButton>

      <h2 className='mt-14 font-semibold text-xl'>Your cart, {userName}</h2>

      {cart ? (
        <ul className='mt-5 divide-y divide-stone-200 border-b'>
          {cart.map((item) => (
            <CartItem item={item} key={item.pizzaId} />
          ))}
        </ul>
      ) : null}

      <div className='mt-6 space-x-3'>
        <Button to='/order/new' type='primary'>
          Order pizzas
        </Button>
        <Button type='secondary'>Clear Cart</Button>
      </div>
    </div>
  );
}

export default Cart;
