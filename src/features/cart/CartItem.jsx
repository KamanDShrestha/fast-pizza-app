import { useDispatch } from 'react-redux';
import Button from '../../ui/Button';
import { formatCurrency } from '../../utils/helpers';
import { deleteFromCart } from './cartSlice';
import UpdateCartButtons from '../../ui/UpdateCartButtons';

function CartItem({ item }) {
  const { id, name, quantity, totalPrice } = item;
  console.log(item);

  const dispatch = useDispatch();
  return (
    <li className='p-4 sm:flex sm:justify-between'>
      <p className='mb-0'>
        {quantity}&times; {name}
      </p>
      <div className='font-semibold text-sm flex items-center justify-between mb-0 sm:flex  sm:gap-4 '>
        <p>{formatCurrency(totalPrice)}</p>
        <UpdateCartButtons pizzaID={id} />
        <Button
          type={'small'}
          onButtonClick={() => dispatch(deleteFromCart(id))}
        >
          Delete
        </Button>
        {/* <Button type={'small'}>Test</Button> */}
      </div>
    </li>
  );
}

export default CartItem;
