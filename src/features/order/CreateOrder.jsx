import { useState } from 'react';
import { Form, useActionData, useNavigation } from 'react-router-dom';
import { createOrder } from '../../services/apiRestaurant';
import { redirect } from 'react-router-dom';
import Button from '../../ui/Button';
import FormInput from '../../ui/FormInput';
// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );

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

function CreateOrder() {
  // const [withPriority, setWithPriority] = useState(false);
  const cart = fakeCart;

  //to know the current state of the component/whole application
  const isSubmitting = useNavigation().state === 'submitting';
  console.log(isSubmitting);
  //getting the data returned by the action function in the function
  const formErrors = useActionData();

  return (
    <div className='p-5'>
      <h2>Ready to order? Let's go!</h2>

      <Form method='POST'>
        <div>
          <label>First Name</label>
          <div>
            <input type='text' name='customer' required className='input' />
          </div>
        </div>

        <div>
          <label>Phone number</label>
          <div>
            <input type='tel' name='phone' required className='input' />
          </div>
        </div>

        <div>
          <label>Address</label>
          <div>
            <FormInput type='address' name='address' required />
          </div>
        </div>
        {formErrors?.phone}

        <div>
          <input
            type='checkbox'
            name='priority'
            id='priority'
            className='accent-red-400 h-4 w-4 m-1'
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor='priority'>Want to yo give your order priority?</label>
        </div>
        <input hidden name='cart' value={JSON.stringify(cart)} />
        <div>
          <Button disabled={isSubmitting}>
            {isSubmitting ? 'Submitting your order...' : 'Order now'}
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
    priority: formData.priority === 'on',
  };
  console.log(order);

  const errors = {};
  //checking if the correct phone number is provided;
  if (!isValidPhone(order.phone)) {
    errors.phone =
      'Please provide a valid phone number to make some orders. You know, orders need to be handled properly. You wouldnot want your pizza to be delivered elsewhere. ';
    return errors;
  }

  const providedOrder = await createOrder(order);
  console.log(providedOrder);
  //redirect to navigate to order page, can't use useNavigate as hooks can't be used in functions
  return redirect(`/order/${providedOrder.id}`);
}

export default CreateOrder;
