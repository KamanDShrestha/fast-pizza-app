import Button from '../../ui/Button';
import { formatCurrency } from '../../utils/helpers';

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  return (
    <li className='flex gap-5 py-2 '>
      <img
        src={imageUrl}
        alt={name}
        className={`${
          soldOut ? 'grayscale rounded-xl h-32' : 'rounded-xl h-32'
        } `}
      />
      <div className='flex flex-col grow pt-1'>
        <p className='font-semibold'>{name}</p>
        <p className='capitalize text-sm'>
          {' '}
          <span className='font-semibold'>Ingredients: </span>
          {ingredients.join(', ')}
        </p>
        <div className='mt-auto text-sm flex items-center justify-between'>
          {!soldOut ? (
            <p>{formatCurrency(unitPrice)}</p>
          ) : (
            <p className='uppercase text-slate-400 font-semibold text-sm'>
              Sold out
            </p>
          )}
          <Button type={'small'}>Add to cart</Button>
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
