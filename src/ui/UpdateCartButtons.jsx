import React from 'react';
import Button from './Button';
import { useDispatch, useSelector } from 'react-redux';
import {
  decreaseQuantity,
  getQuantityInCartByID,
  increaseQuantity,
} from '../features/cart/cartSlice';
const UpdateCartButtons = ({ pizzaID }) => {
  const dispatch = useDispatch();
  const quantityInCart = useSelector(getQuantityInCartByID(pizzaID));
  return (
    <div className='space-x-3'>
      <Button
        type={'round'}
        onButtonClick={() => dispatch(decreaseQuantity(pizzaID))}
        disabled={quantityInCart <= 1}
      >
        -
      </Button>
      <Button
        type={'round'}
        onButtonClick={() => dispatch(increaseQuantity(pizzaID))}
      >
        +
      </Button>
    </div>
  );
};

export default UpdateCartButtons;
