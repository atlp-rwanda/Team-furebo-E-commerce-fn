/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
/* eslint-disable no-unused-vars */
/* eslint-disable arrow-body-style */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FALSE } from 'sass';
import image from '../../assets/images/profile2.png';
import SetRoles from '../../redux/actions/SetRoles';

import DisableAccountButton from './DisableAccountButton';

const UserCard = ({ data, handleUsers }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [dismissed, setDismissed] = useState(false);
  const [updatedData, setUpdatedData] = useState({ role: '' });

 

  const {
    successCondition, userRole, error, pending,
  } = useSelector(
    (state) => state.userRole,
  );

  const userId = data.id;

  const handleSubmit = () => {
    SetRoles(updatedData, userId, dispatch, handleUsers);
  };

  const disableAccountData = {
    userId: userId,
    currentUserStatus: data.isEnabled
  }

  return (
    <div className="cardWraper" data-testid="UserCard">
      <div className="cardWraperInner">
        <img src={image} alt="images" />
        <div className="cardWraperInnerBody">
          <h1>{data.fullname}</h1>
          <p>{`user Id: ${userId}`}</p>
          <p>{`email: ${data.email}`}</p>
          <p>{`role: ${JSON.parse(data.role).name}`}</p>
          <p>{`Account status: ${data.isEnabled ? "Enabled" : "Disabled" }`}</p>
        </div>
      </div>
      <div className="cardWraperRight">
        <button className="button1">view full profife</button>
        {/* <button className="button2">Disable Account</button> */}
        <DisableAccountButton data={disableAccountData} />
        <button
          className="button3"
          onClick={() => {
            setDismissed(true);
          }}
        >
          update role
        </button>
      </div>
      {dismissed && (
        <div className="popUp">
          <div className="sendingForm">
            <div onClick={() => setDismissed(false)} className="disablePopUp">
              X
            </div>
            <div className="checkbox">
              <label htmlFor="merchant:">Merchant:</label>
              <input
                id="merchant:"
                type="radio"
                name="updatedData"
                value="merchant"
                onChange={(e) => setUpdatedData({ ...updatedData, role: e.target.value })}
              />
            </div>
            <div className="checkbox">
              <label htmlFor="customer:">Customer:</label>
              <input
                id="customer:"
                type="radio"
                name="updatedData"
                value="customer"
                onChange={(e) => setUpdatedData({ ...updatedData, role: e.target.value })}
              />
            </div>
            <div className="checkbox">
              <label htmlFor="admin:">Admin:</label>
              <input
                id="admin:"
                type="radio"
                name="updatedData"
                value="admin"
                onChange={(e) => setUpdatedData({ ...updatedData, role: e.target.value })}
              />
            </div>
            <button onClick={handleSubmit}>Update</button>
            {pending && <span className="pending">loading...</span>}
            {successCondition && (
              <span className="successDisplay">{userRole.message}</span>
            )}
            {error.condition && (
              <span className="errorDisplay">{error.message}</span>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserCard;
