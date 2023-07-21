import { useEffect, useState } from 'react';
import {
  Form,
  useActionData,
  useFetcher,
  useNavigation,
  useResolvedPath,
} from 'react-router-dom';
import { createOrder } from '../../services/apiRestaurant';
import { redirect } from 'react-router-dom';
import Button from '../../ui/Button';
import FormInput from '../../ui/FormInput';
import { useDispatch, useSelector } from 'react-redux';
import userSlice, { fetchAddress } from '../user/userSlice';
import store from '../../store';
import { clearCart, getTotalCartPrice } from '../cart/cartSlice';
import EmptyCart from '../cart/EmptyCart';
import { formatCurrency } from '../../utils/helpers';
// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );

function CreateOrder() {
  const [withPriority, setWithPriority] = useState(false);
  const cart = useSelector((store) => store.cart.cart);

  //to know the current state of the component/whole application
  const isSubmitting = useNavigation().state === 'submitting';
  console.log(isSubmitting);
  //getting the data returned by the action function in the function
  const formErrors = useActionData();

  const {
    userName,
    address,
    error: errorAddress,
    position,
    status: isLoadingStatus,
  } = useSelector((store) => store.user);
  const isLoading = isLoadingStatus === 'loading';

  const totalPriceInCart = useSelector(getTotalCartPrice);
  const priorityPrice = withPriority ? totalPriceInCart * 0.2 : 0;
  const finalTotalPrice = totalPriceInCart + priorityPrice;

  const dispatch = useDispatch();

  //getting the address from the geolocation

  console.log(address);
  if (!cart.length) return <EmptyCart />;

  return (
    <div className='px-4 py-4 flex flex-col items-center h-[600] justify-center'>
      <h2 className='mb-10 font-semibold text-xl'>Ready to order? Let's go!</h2>

      <Form method='POST' className='space-y-4 w-72 items-center'>
        <div>
          <label>First Name</label>
          <div>
            <input
              type='text'
              name='customer'
              required
              className='input'
              defaultValue={userName}
            />
          </div>
        </div>

        <div className=''>
          <label>Phone number</label>
          <div>
            <input type='tel' name='phone' required className='input' />
          </div>
          {formErrors && (
            <div className='text-sm text-red-700 bg-red-300 rounded-md p-2 mt-2'>
              {formErrors?.phone}
            </div>
          )}
        </div>

        <div className='relative'>
          <label>Address</label>
          <FormInput
            type='address'
            name='address'
            disabled={isLoading}
            defaultValue={address}
            required
          />
          {!position.latitude && !position.longitude && (
            <span className='absolute right-1 py-[3px]'>
              <Button
                type={'small'}
                onButtonClick={(e) => {
                  e.preventDefault();
                  return dispatch(fetchAddress());
                }}
              >
                Get position
              </Button>
            </span>
          )}
          {errorAddress && (
            <div className='text-sm text-red-700 bg-red-300 rounded-md p-2 mt-2'>
              {errorAddress}
            </div>
          )}
        </div>

        <div className='mt-4'>
          <input
            type='checkbox'
            name='priority'
            id='priority'
            className='accent-red-400 h-4 w-4 m-1'
            value={withPriority}
            onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor='priority'>Want to give your order priority?</label>
        </div>
        <input hidden name='cart' value={JSON.stringify(cart)} />
        <div>
          <Button disabled={isSubmitting} type={'primary'}>
            {isSubmitting
              ? 'Submitting your order...'
              : `Order now for ${formatCurrency(finalTotalPrice)}`}
          </Button>
        </div>
      </Form>
    </div>
  );
}

export async function action({ request }) {
  const data = await request.formData();
  console.log(data);
  const formData = Object.fromEntries(data);
  console.log(formData);

  //providing order to createOrder function to post the order
  const order = {
    ...formData,
    cart: JSON.parse(formData.cart),
    priority: formData.priority === 'true',
  };
  console.log(order);

  const errors = {};
  //checking if the correct phone number is provided;
  if (!isValidPhone(order.phone)) {
    errors.phone = 'Please provide a valid phone number to make some orders. ';
    return errors;
  }

  const providedOrder = await createOrder(order);
  console.log(providedOrder);
  store.dispatch(clearCart());
  //redirect to navigate to order page, can't use useNavigate as hooks can't be used in functions
  return redirect(`/order/${providedOrder.id}`);
}

export default CreateOrder;
