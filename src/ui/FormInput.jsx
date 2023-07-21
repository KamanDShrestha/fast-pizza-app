import React from 'react';

const FormInput = ({ type, name, defaultValue, disabled }) => {
  return (
    <input
      type={type}
      name={name}
      disabled={disabled}
      defaultValue={defaultValue}
      className='rounded-full border border-stone-200 px-4 py-2 text-sm w-72 sm:focus:w-96 transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-red-400'
    />
  );
};

export default FormInput;
