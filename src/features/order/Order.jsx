// Test ID: IIDSAT

import { useLoaderData, useParams } from 'react-router-dom';
import { getOrder } from '../../services/apiRestaurant';
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from '../../utils/helpers';
import OrderItem from './OrderItem';

const order = {
  id: 'ABCDEF',
  customer: 'Jonas',
  phone: '123456789',
  address: 'Arroios, Lisbon , Portugal',
  priority: true,
  estimatedDelivery: '2027-04-25T10:00:00',
  cart: [
    {
      pizzaId: 7,
      name: 'Napoli',
      quantity: 3,
      unitPrice: 16,
      totalPrice: 48,
    },
    {
      pizzaId: 5,
      name: 'Diavola',
      quantity: 2,
      unitPrice: 16,
      totalPrice: 32,
    },
    {
      pizzaId: 3,
      name: 'Romana',
      quantity: 1,
      unitPrice: 15,
      totalPrice: 15,
    },
  ],
  position: '-9.000,38.000',
  orderPrice: 95,
  priorityPrice: 19,
};

function Order() {
  // Everyone can search for all orders, so for privacy reasons we're gonna gonna exclude names or address, these are only for the restaurant staff
  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = useLoaderData();

  const { orderID } = useParams();

  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  return (
    <div className='pt-4 px-4 space-y-8'>
      <div className='flex items-center justify-between flex-wrap gap-2'>
        <h2 className='text-xl font-semibold'>Order #{orderID} status</h2>

        <div className='space-x-4 '>
          {priority && (
            <span className='bg-red-500 text-stone-100 px-3 rounded-full uppercase text-xs font-semibold tracking-wider  py-2'>
              Priority
            </span>
          )}
          <span className='bg-green-500 text-stone-100 px-3 rounded-full uppercase text-xs font-semibold tracking-wider  py-2'>
            {status} order
          </span>
        </div>
      </div>

      <div className='flex items-center justify-between flex-wrap gap-2 bg-stone-200 p-3 rounded-md'>
        <p className='font-semibold '>
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
            : 'Order should have arrived'}
        </p>
        <p className='text-sm text-stone-500'>
          (Estimated delivery: {formatDate(estimatedDelivery)})
        </p>
      </div>
      <ul className='divide-y divide-stone-300 border-t-2 border-b-2 space-y-5'>
        {cart.map((item) => (
          <OrderItem item={item} />
        ))}
      </ul>
      <div className='flex flex-col text-sm sm:flex-row sm:items-center sm:justify-between flex-wrap gap-2 bg-stone-200 p-3 rounded-md'>
        <p>Price pizza: {formatCurrency(orderPrice)}</p>
        {priority && <p>Price priority: {formatCurrency(priorityPrice)}</p>}
        <p className='font-bold'>
          To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}
        </p>
      </div>
    </div>
  );
}

//loader function for getting the data using react router
export async function loader({ params }) {
  const data = await getOrder(params.orderID);
  return data;
}

export default Order;
