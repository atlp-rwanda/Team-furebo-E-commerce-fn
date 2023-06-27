/* eslint-disable react/button-has-type */
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import '../../css/checkoutStyles/Chechout.css';
import { Link } from 'react-router-dom';
import getOrder from '../../redux/actions/checkout/GetOrder';

const Completion = () => {
  const dispatch = useDispatch();
  const { orderInfo } = useSelector((state) => state.getOrder);
  const { paymentInfo } = useSelector((state) => state.payment);

  useEffect(() => {
    getOrder(dispatch);
  }, []);

  return (
    <div className="completionPage" data-testid="Completion">
      <div className="completionPageHeader">
        <h1>Payment is successful! 🎉</h1>
        <h1>Thank you! 🎉</h1>
      </div>
      <div className="orderStatus">
        {paymentInfo.stripeMessage}
        <br />
        <span>
          Your Order status:
          {' '}
          {orderInfo[orderInfo.length - 1]?.status}
        </span>
        <span>
          Your Order number:
          {' '}
          {orderInfo[orderInfo.length - 1]?.id}
        </span>
        <span>
          Total cost:
          {' '}
          $
          {orderInfo[orderInfo.length - 1]?.totalPrice}
        </span>
      </div>
      <Link to="/products">
        <motion.button whileHover={{ scale: 1.03 }}>Browser more products</motion.button>
      </Link>
    </div>
  );
};

export default Completion;
