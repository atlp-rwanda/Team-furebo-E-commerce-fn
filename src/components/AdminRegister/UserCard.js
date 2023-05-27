/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
/* eslint-disable no-unused-vars */
/* eslint-disable arrow-body-style */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import image from '../../assets/images/istockphoto-546175134-1024x1024.jpg';
import SetRoles from '../../redux/actions/SetRoles';

const UserCard = ({ data, handleUsers }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [dismissed, setDismissed] = useState(false);
  const [updatedData, setUpdatedData] = useState({ role: '' });

  const { successCondition, userRole, error, pending } = useSelector(
    state => state.userRole
  );

  const userId = data.id;

  const handleSubmit = () => {
    SetRoles(updatedData, userId, dispatch, handleUsers);
  };

  return (
    <div className="cardWraper" data-testid="UserCard">
      <div className="cardWraperInner">
        <img src={image} alt="images" />
        <div className="cardWraperInnerBody">
          <h1>{data.fullname}</h1>
          <p>{`email: ${data.email}`}</p>
          <p>{`role: ${JSON.parse(data.role).name}`}</p>
        </div>
      </div>
      <div className="cardWraperRight">
        <button className="button1">view profife</button>
        <button className="button2">Disable Account</button>
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
                onChange={e =>
                  setUpdatedData({ ...updatedData, role: e.target.value })
                }
              />
            </div>
            <div className="checkbox">
              <label htmlFor="customer:">Customer:</label>
              <input
                id="customer:"
                type="radio"
                name="updatedData"
                value="customer"
                onChange={e =>
                  setUpdatedData({ ...updatedData, role: e.target.value })
                }
              />
            </div>
            <div className="checkbox">
              <label htmlFor="admin:">Admin:</label>
              <input
                id="admin:"
                type="radio"
                name="updatedData"
                value="admin"
                onChange={e =>
                  setUpdatedData({ ...updatedData, role: e.target.value })
                }
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
