import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import image from '../../assets/images/order.png';
import { BuyersOrders, SearchOrderStatus } from '../../redux/actions/trackOrders/orderStatus';
import '../../css/trackOrders/trackorders.css';

const ViewBuyersOrders = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);
  const [orderId, setOrderId] = useState(null);
  const [foundOrder, setFoundOrder] = useState([]);

  useEffect(() => {
    const getAllOrders = async () => {
      const returnedOrders = await BuyersOrders();
      if (returnedOrders) {
        setOrders(returnedOrders.data.orders);
      }
    };

    getAllOrders();
  }, []);
  const handleChange = (e) => {
    const input = e.target;
    setOrderId(input.value);
  };
  const handleOrderSearch = async () => {
    if (!orderId) {
      return;
    }
    const res = await SearchOrderStatus(orderId);
    if (res) {
      console.log(res.data);
      navigate(`/order-details/${orderId}`)
      setOrderId(null);
    } else {
      setFoundOrder([]);
    }
  };
  useEffect(() => {
    console.log(foundOrder);
  }, [foundOrder]);

  return (
    <div className="orderHistoryPage">
      <div className="CustomerSupportPage">
        <Link to="/support"><button>Ask support</button></Link>
      </div>
      <div className="buyersOrder" data-testid="buyerorder">
        <div className="Title">
          <h1>Order History</h1>
        </div>
        <div className="SearchPage tableRow">
          <input
            type="number"
            placeholder="search order by id"
            onChange={handleChange}
            value={orderId || ''}
          />
          <FaSearch onClick={handleOrderSearch} />
        </div>
        <div className="orderTable">
          <div className="tableRow tableHeader">
            <span>ORDER ID</span>
            <span>Date</span>
            <span>Items</span>
            <span>Total amount</span>
            <span>Status</span>
            <span>Action</span>
          </div>
          { (foundOrder.length > 0 ? foundOrder : orders).map((order) => (
            <div className="tableRow" key={order.id}>
              <span className="orderId">{order.id}</span>
              <span>{order.createdAt}</span>
              <span>{order.products.length}</span>
              <span>{order.totalPrice}</span>
              <span className="OrderStatus">{order.status}</span>
              <Link to={`/order-details/${order.id}`}><button>View Details</button></Link>
            </div>
          ))}
          {(foundOrder.length === 0 && orders.length === 0) && (
            <div className="tableRow">
              <span>No Orders</span>
            </div>
          )}
        </div>
      </div>

    </div>
  );
};

export default ViewBuyersOrders;
