import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteFromCart } from '../features/cart/cartSlice';
import Button from './Button';
const DeleteButton = ({ pizzaID }) => {
  const dispatch = useDispatch();
  return (
    <Button
      type='small'
      onButtonClick={() => dispatch(deleteFromCart(pizzaID))}
    >
      Delete
    </Button>
  );
};

export default DeleteButton;
