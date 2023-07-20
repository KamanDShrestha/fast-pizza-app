import { Link } from 'react-router-dom';
import Button from '../../ui/Button';
import LinkButton from '../../ui/LinkButton';
import CartItem from './CartItem';

const fakeCart = [
  {
    pizzaId: 12,
    name: 'Mediterranean',
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: 'Vegetale',
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: 'Spinach and Mushroom',
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function Cart() {
  const cart = fakeCart;

  return (
    <div className='px-4 '>
      <LinkButton
        to='/menu'
        className=' text-blue-500 hover:text-blue-700 hover:underline'
      >
        &larr; Back to menu
      </LinkButton>

      <h2 className='mt-14 font-semibold text-xl'>Your cart, %NAME%</h2>

      <ul className='mt-5 divide-y divide-stone-200 border-b'>
        {cart.map((item) => (
          <CartItem item={item} key={item.pizzaId} />
        ))}
      </ul>

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
