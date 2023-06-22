import React, { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux';
import { AllOrders } from '../../redux/actions/trackOrders/orderStatus';
import OrderCard from './OrderCard';
// eslint-disable-next-line arrow-body-style
const Orders = ({handleOrders}) => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const getAllOrders = async () => {
      const returnedOrders = await AllOrders();
      if(returnedOrders){
        setOrders(returnedOrders.data.orders);
      };
      }
     

    getAllOrders();
  }, [handleOrders]);
  return (
    <div className="orderContainer" data-testid="Orders">
      <h1>Orders</h1>
      <div className="containerOrd">
          {orders?.map((order) => (
            <OrderCard key={order.id} data={order} handleOrders={handleOrders} />
          ))}
        </div>
        <ToastContainer />
      </div>
  );
};

export default Orders;
