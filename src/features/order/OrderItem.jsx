import { formatCurrency } from '../../utils/helpers';

function OrderItem({ item, isLoadingIngredients, ingredients }) {
  const { quantity, name, totalPrice } = item;

  return (
    <li>
      <div className='my-5 flex justify-between item-center'>
        <p className='space-y-2'>
          <span className='font-semibold'>{quantity}&times;</span> {name}
          <p className='capitalize text-sm'>
            {isLoadingIngredients ? 'Loading...' : ingredients.join(', ')}
          </p>
        </p>
        <p className='text-sm font-semibold'>{formatCurrency(totalPrice)} </p>
      </div>
    </li>
  );
}

export default OrderItem;
