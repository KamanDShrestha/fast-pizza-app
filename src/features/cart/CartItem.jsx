import Button from '../../ui/Button';
import { formatCurrency } from '../../utils/helpers';

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <li className='p-4 sm:flex sm:justify-between'>
      <p className='mb-0'>
        {quantity}&times; {name}
      </p>
      <div className='font-semibold text-sm flex items-center justify-between mb-0 sm:flex  sm:gap-4 '>
        <p>{formatCurrency(totalPrice)}</p>
        <Button type={'small'}>Delete</Button>
        {/* <Button type={'small'}>Test</Button> */}
      </div>
    </li>
  );
}

export default CartItem;
