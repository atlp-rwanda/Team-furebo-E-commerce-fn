/* eslint-disable no-plusplus */
/* eslint-disable no-restricted-globals */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable arrow-body-style */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { RxCross2 } from 'react-icons/rx';
import {
  CardElement, useStripe, useElements, PaymentElement,
} from '@stripe/react-stripe-js';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import image from '../../assets/images/pay.png';
import makePayment from '../../redux/actions/payment/Payment';

const PaymentForm = ({ setOpenPayment, totalPrice }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [cardData, setCardData] = useState({
    CardNo: '', ExpMonth: '', ExpYear: '', cvc: '',
  });

  const [errors, setErrors] = useState({
    CardNo: '', ExpMonth: '', ExpYear: '', cvc: '',
  });

  const { orderInfo } = useSelector((state) => state.getOrder);
  const { pending } = useSelector((state) => state.payment);

  const unPaidOrder = orderInfo?.filter((order) => order.status === 'pending');

  const orderId = unPaidOrder?.[0]?.id;

  const handleChange = (e) => {
    setCardData({
      ...cardData, [e.target.name]: e.target.value,
    });
  };

  const isCardNumberValid = (cardNumber) => {
    let sum = 0;
    let shouldDouble = false;
    for (let i = cardNumber.length - 1; i >= 0; i--) {
      let digit = parseInt(cardNumber.charAt(i), 10);
      if (shouldDouble) {
        digit *= 2;
        if (digit > 9) {
          digit -= 9;
        }
      }
      sum += digit;
      shouldDouble = !shouldDouble;
    }
    return sum % 10 === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Perform form validation here
    let isValid = true;
    const newErrors = {
      CardNo: '',
      ExpMonth: '',
      ExpYear: '',
      cvc: '',
    };

    if (!cardData.CardNo) {
      isValid = false;
      newErrors.CardNo = 'Please enter card number';
    } else {
      // Remove any non-digit characters from the card number
      const cardNumber = cardData.CardNo.replace(/\D/g, '');

      // Validate card number using the Luhn algorithm
      if (!isCardNumberValid(cardNumber)) {
        isValid = false;
        newErrors.CardNo = 'Invalid card number';
      }
    }

    if (!cardData.ExpMonth) {
      isValid = false;
      newErrors.ExpMonth = 'Please enter expiration month';
    } else if (isNaN(cardData.ExpMonth) || cardData.ExpMonth < 1 || cardData.ExpMonth > 12) {
      isValid = false;
      newErrors.ExpMonth = 'Invalid expiration month';
    }

    const currentYear = new Date().getFullYear();
    if (!cardData.ExpYear) {
      isValid = false;
      newErrors.ExpYear = 'Please enter expiration year';
    } else if (isNaN(cardData.ExpYear) || cardData.ExpYear < currentYear) {
      isValid = false;
      newErrors.ExpYear = 'Invalid expiration year';
    }

    if (!cardData.cvc) {
      isValid = false;
      newErrors.cvc = 'Please enter CVC';
    } else if (cardData.cvc.length !== 3) {
      isValid = false;
      newErrors.cvc = 'Invalid CVC';
    }

    if (isValid) {
      setErrors({
        CardNo: '', ExpMonth: '', ExpYear: '', cvc: '',
      });
      makePayment(cardData, orderId, navigate, dispatch);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <form className="stripeForm" data-testid="PaymentForm">
      <div className="cross">
        <RxCross2 className="croseIcon" onClick={() => setOpenPayment(false)} />
      </div>
      <div className="paymentContainer">
        <div className="paymentHeader">
          <div className="header1">
            <h1>PAYMENT</h1>
            <span>
              $
              {totalPrice}
            </span>
          </div>
          <div className="header3">
            <h3>Accepted Cards:</h3>
            <img src={image} alt="images" />
          </div>
        </div>
        <form className="paymentForm">
          <div className="inputContainer">
            <label htmlFor="credit card number">Credit Card Number:</label>
            <input id="credit card number" name="CardNo" type="text" placeholder="1111 2222 3333 4444" onChange={handleChange} />
            {errors.CardNo && <span className="error">{errors.CardNo}</span>}
          </div>
          <div className="inputContainer">
            <label htmlFor="exp month">Exp Month:</label>
            <input id="exp month" name="ExpMonth" type="text" placeholder="5" onChange={handleChange} />
            {errors.ExpMonth && <span className="error">{errors.ExpMonth}</span>}
          </div>
          <div className="inputContainer2">
            <div className="inputContainer">
              <label htmlFor="exp year">Exp Year:</label>
              <input id="exp year" name="ExpYear" type="number" placeholder="2022" onChange={handleChange} />
              {errors.ExpYear && <span className="error">{errors.ExpYear}</span>}
            </div>
            <div className="inputContainer">
              <label htmlFor="cvc">CVC:</label>
              <input id="cvc" name="cvc" type="number" placeholder="111" onChange={handleChange} />
              {errors.cvc && <span className="error">{errors.cvc}</span>}
            </div>
          </div>
        </form>
      </div>
      <motion.button whileHover={{ scale: 1.03 }} type="submit" onClick={handleSubmit}>
        {pending ? 'Processing ... ' : 'Pay now'}
      </motion.button>
    </form>
  );
};

export default PaymentForm;
