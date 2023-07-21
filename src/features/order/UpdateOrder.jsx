import React from 'react';
import Button from '../../ui/Button';
import { useFetcher } from 'react-router-dom';
import { updateOrder } from '../../services/apiRestaurant';
const UpdateOrder = ({ order }) => {
  const fetcher = useFetcher();
  return (
    <fetcher.Form method='PATCH'>
      <Button type='primary'>Update Priority</Button>
    </fetcher.Form>
  );
};

export async function action({ request, params }) {
  const data = { priority: true };
  console.log(params, data);
  const id = params.orderID;
  console.log(id);
  await updateOrder(id, data);
  return null;
}

export default UpdateOrder;
