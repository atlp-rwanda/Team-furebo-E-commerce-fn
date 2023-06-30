/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
/* eslint-disable no-unused-vars */
/* eslint-disable arrow-body-style */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import image from '../../assets/images/order.png';
import { AllOrders, updateOrderStatus } from '../../redux/actions/trackOrders/orderStatus';

const OrderCard = ({ data, handleOrders }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [dismissed, setDismissed] = useState(false);
  const [updatedData, setUpdatedData] = useState({ orderStatus: '' });

  const [orders, setOrders] = useState([]);
  const [setStatus, status]= useState([]);
  useEffect(() => {
    const getAllOrders = async () => {
      const returnedOrders = await AllOrders();
      if (returnedOrders) {
        console.log(returnedOrders);
        setOrders(returnedOrders.data.orders);
      }
    };

    getAllOrders();
  }, [handleOrders]);

  const handleSubmit = async (orderId) => {
    const res = await updateOrderStatus(orderId, updatedData, dispatch);
    if (res) {
      setDismissed(false);
      window.location.reload();
    }
    
  };
  return (
    <div className="cardWraper" data-testid="OrderCard">
      
      <div className="cardWraperInner">
        <img src={image} alt="images" />
        <div className="cardWraperInnerBody">
          <h1>{`User: ${data.userId}`}</h1>
          <p>{`Order: ${data.id}`}</p>
          <p>{`status: ${data.status}`}</p>
        </div>
      </div>
      <div className="cardWraperRight">
        <button
          className="button1"
          onClick={() => {
            setDismissed(true);
          }}
        >
          Update status
        </button>
      </div>
      {dismissed && (
        <div className="popUp" data-testid="popUp">
          <div className="sendingForm">
            <div onClick={() => setDismissed(false)} className="disablePopUp">
              X
            </div>
            <div className="checkbox">
              <label htmlFor="pending:">pending:</label>
              <input
                id="pending:"
                type="radio"
                name="updatedData"
                value="pending"
                onChange={(e) => setUpdatedData({ ...updatedData, orderStatus: e.target.value })}
              />
            </div>
            <div className="checkbox">
              <label htmlFor="paid:">Paid:</label>
              <input
                id="paid:"
                type="radio"
                name="updatedData"
                value="paid"
                onChange={(e) => setUpdatedData({ ...updatedData, orderStatus: e.target.value })}
              />
            </div>
            <div className="checkbox">
              <label htmlFor="dispatched:">Dispatched:</label>
              <input
                id="dispatched:"
                type="radio"
                name="updatedData"
                value="dispatched"
                onChange={(e) => setUpdatedData({ ...updatedData, orderStatus: e.target.value })}
              />
            </div>
            <div className="checkbox">
              <label htmlFor="delivered:">delivered:</label>
              <input
                id="delivered:"
                type="radio"
                name="updatedData"
                value="delivered"
                onChange={(e) => setUpdatedData({ ...updatedData, orderStatus: e.target.value })}
              />
            </div>
            <div className="checkbox">
              <label htmlFor="cancelled:">Cancelled:</label>
              <input
                id="cancelled:"
                type="radio"
                name="updatedData"
                value="cancelled"
                onChange={(e) => setUpdatedData({ ...updatedData, orderStatus: e.target.value })}
              />
            </div>
            <button onClick={() => handleSubmit(data.id)}>Update</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderCard;
