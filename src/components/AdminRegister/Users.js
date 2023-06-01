/* eslint-disable no-unused-vars */
/* eslint-disable arrow-body-style */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import fetchUsers from '../../redux/actions/GetUsers';
import UserCard from './UserCard';
// import { users } from '../../constants/Constant';

const Users = ({ handleUsers }) => {
  const dispatch = useDispatch();
  const {
    successCondition, users, error, pending,
  } = useSelector((state) => state.allUsers);

  // useEffect(() => {
  //   fetchUsers(dispatch);
  // });

  return (
    <div className="userContainer" data-testid="Users">
      <h1>Users</h1>
      {users?.map((user) => (
        <UserCard key={user.id} data={user} handleUsers={handleUsers} />
      ))}
    </div>
  );
};

export default Users;
