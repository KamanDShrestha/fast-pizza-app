import { useState } from 'react';
import FormInput from '../../ui/FormInput';
import Button from '../../ui/Button';
import { updateName } from './userSlice';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function CreateUser() {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  //with dispatch, we are providing action from the action creators to the reducer
  const dispatch = useDispatch();
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(updateName(username));
    navigate('/menu');
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className='mb-4 text-base md:text-lg text-stone-600 font-semibold'>
        👋 Welcome! Please start by telling us your name:
      </p>

      <input
        type='text'
        placeholder='Your full name'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className='input border-b-2 w-40 sm:w-60 text-sm mb-3'
      />

      {username !== '' && (
        <div>
          <Button type={'primary'}>Start ordering</Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
