/* eslint-disable no-unused-vars */
/* eslint-disable arrow-body-style */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import fetchUsers from '../../redux/actions/GetUsers';
import UserCard from './UserCard';
// import { users } from '../../constants/Constant';

const Users = ({ handleUsers }) => {
  const dispatch = useDispatch();
  const [users, setUsers] = useState([]);
  const {
    successCondition, error, pending,
  } = useSelector(
    (state) => state.allUsers,
  );

  useEffect(() => {
    const getAllUsers = async () => {
      const returnedUsers = await fetchUsers(dispatch);
      setUsers(returnedUsers);
    };

    getAllUsers();
  }, [handleUsers]);

  return (
    <div className="userContainer" data-testid="Users">
      <h1>Users</h1>
      {pending ? (<div className="loading">loading...</div>) : (
        <div className="containerUsr">
          {users?.map((user) => (
            <UserCard key={user.id} data={user} handleUsers={handleUsers} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Users;
