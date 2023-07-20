import React from 'react';
import { useSelector } from 'react-redux';

const UserName = () => {
  // const userName = useSelector((state) => state.user.username);
  const userName = useSelector((state) => state.user.userName);
  console.log(userName);
  console.log(userName);
  if (!userName) return null;
  return <div className='font-semibold hidden md:block'>{userName}</div>;
};

export default UserName;
