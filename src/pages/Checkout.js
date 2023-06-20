/* eslint-disable no-unused-vars */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable arrow-body-style */
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import '../css/checkoutStyles/Chechout.css';
import checkOut from '../redux/actions/checkout/Checkout';
import getOrder from '../redux/actions/checkout/GetOrder';
import PaymentForm from '../components/payment/PaymentForm';

const Checkout = () => {
  const dispatch = useDispatch();

  const [openPayment, setOpenPayment] = useState(false);

  const { checkoutInfo, pending } = useSelector((state) => state.checkout);

  const { cartItems } = useSelector((state) => state.viewCartItems);

  const { orderInfo } = useSelector((state) => state.getOrder);

  let totalPrice = 0;

  const [deliveryAddresses, setDeliveryAddresses] = useState({
    country: '', city: '', street: '', zipCode: '',
  });
  const [paymentInformations, setPaymentInformations] = useState({
    cardNumber: '', expirationDate: '', cvv: '',
  });

  useEffect(() => {
    getOrder(dispatch);
  }, []);

  const handleChange = (e) => {
    setDeliveryAddresses({
      ...deliveryAddresses, [e.target.name]: e.target.value,
    });
  };

  const handleChange2 = (e) => {
    setPaymentInformations({
      ...paymentInformations, [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    checkOut(deliveryAddresses, paymentInformations, dispatch);
  };

  const checkoutStatus = checkoutInfo?.status
    ? checkoutInfo?.status
    : 'fail';

  const unPaidOrder = orderInfo.filter((order) => order.status === 'pending');
  console.log(unPaidOrder, 'This is the unpaid order');

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        data-testid="checkout"
        className="checkout"
      >
        <div className="checkoutNav">
          Checkout
        </div>
        <div className="checkoutContainer">
          <div className="checkoutForm">
            <div className="basicInfo">
              <h1>Basic Informations</h1>
              <div className="option">
                <h1>Method:</h1>
                <p>Credit Card</p>
              </div>
            </div>
            <div className="formDiv">
              <form>
                <div className="formDivRight">
                  <div className="inputContainer">
                    <label>country:</label>
                    <input name="country" type="text" value={deliveryAddresses.country} placeholder="country" onChange={handleChange} />
                  </div>
                  <div className="inputContainer">
                    <label>city:</label>
                    <input name="city" type="text" value={deliveryAddresses.city} placeholder="city" onChange={handleChange} />
                  </div>
                  <div className="inputContainer">
                    <label>street:</label>
                    <input name="street" type="text" value={deliveryAddresses.street} placeholder="street" onChange={handleChange} />
                  </div>
                  <div className="inputContainer">
                    <label>zipCode:</label>
                    <input name="zipCode" type="number" value={deliveryAddresses.zipCode} placeholder="zipCode" onChange={handleChange} />
                  </div>
                </div>
                <div className="formDivLeft">
                  <div className="inputContainer">
                    <label>cardNumber:</label>
                    <input name="cardNumber" type="text" value={paymentInformations.cardNumber} placeholder="cardNo" onChange={handleChange2} />
                  </div>
                  <div className="inputContainer">
                    <label>expirationDate:</label>
                    <input name="expirationDate" type="text" value={paymentInformations.expirationDate} placeholder="mm/dd" onChange={handleChange2} />
                  </div>
                  <div className="inputContainer">
                    <label>cvv:</label>
                    <input name="cvv" type="number" value={paymentInformations.cvv} placeholder="cvv" onChange={handleChange2} />
                  </div>
                </div>
              </form>
              <div className="buttonDiv">
                <motion.button whileHover={{ scale: 1.1 }} onClick={handleSubmit}>
                  Place Order
                </motion.button>
              </div>
            </div>
          </div>
          <div className="table">
            <table>
              <thead>
                <tr className="tableHeadRow">
                  <th className="tableHeader">Products</th>
                  <th className="tableHeader">Price</th>
                  <th className="tableHeader">Quantity</th>
                  <th className="tableHeader">Total</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => {
                  totalPrice += item.price * item.quantity;
                  return (
                    <tr key={item.id} className="tableBodyRow">
                      <td className="tableData">{item.name}</td>
                      <td className="tableData">
                        $
                        {' '}
                        {item.price}
                      </td>
                      <td className="tableData">{item.quantity}</td>
                      <td className="tableData">
                        $
                        {' '}
                        {item.quantity * item.price}
                      </td>
                    </tr>
                  );
                })}
                <tr className="tableBodyRow">
                  <td className="tableData">Grand Total</td>
                  <td className="tableGrandTotal">
                    $
                    {' '}
                    {totalPrice}
                  </td>
                </tr>
              </tbody>
            </table>
            {unPaidOrder?.length !== 0 && (
            <div className="orderStatus">
              Now You have a pending order
              please continue with the payment
              <br />
              <span>
                Your Order status:
                {' '}
                {orderInfo[orderInfo.length - 1].status}
              </span>
            </div>
            )}
            {unPaidOrder?.length !== 0 && (
              <motion.button whileHover={{ scale: 1.01 }} onClick={() => setOpenPayment(true)}>
                Now Continue with payment
              </motion.button>
            )}
          </div>
        </div>

        {pending && (
        <div className="popup">
          loading....
        </div>
        )}
      </motion.div>
      {openPayment && (
      <div className="payment">
        <PaymentForm setOpenPayment={setOpenPayment} totalPrice={totalPrice} />
      </div>
      )}

    </>
  );
};

export default Checkout;
