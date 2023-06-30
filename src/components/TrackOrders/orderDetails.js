// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { SearchOrderStatus } from '../../redux/actions/trackOrders/orderStatus';

// import '../../css/trackOrders/trackorders.css';

// const orderDetails = () => {
//   const { id } = useParams();
//   const [order, setOrder] = useState({});

//   useEffect(() => {
//     const orderInfo = async () => {
//       const res = await SearchOrderStatus(id);
//       if (res) {
//         console.log(res.data.data.products);
//         setOrder(res.data.data);
//       } else {
//         setOrder({});
//       }
//     };
//     console.log(order.products);
//     orderInfo();
//   }, []);

//   return (
//     <div className="OrderDetailsPage">
//       <div className="orderCard">
//         <div className="OrderTitle">
//           <h1>Order Details</h1>
//         </div>
//         <div className="orderDetails">
//           <div className="OrderProducts">
//             <h3>Order items</h3>
//             <div className="orderItems">
//               {order.products && order.products.length > 0 ? (
//                 order.products.map((ord) => (
//                   <div className="orderItem" key={ord.productId}>
//                     <span>{ord.productId}</span>
//                     <span>{ord.quantity}</span>
//                     <span>{ord.price}</span>
//                   </div>
//                 ))
//               ) : (
//                 <span>No order items</span>
//               )}
//             </div>
//           </div>
//           <div className="paymentMethod">
//             <h3>Payment Method</h3>
//             <span>{order.paymentMethod}</span>
//           </div>
//           <div className="deliveryAddress">
//             <h3>Delivery Address</h3>
//             {order.deliveryAddress && (
//               <div className='deliveryAddressItems'>
//                 <span>{order.deliveryAddress.country}</span>
//                 <span>{order.deliveryAddress.city}</span>
//                 <span>{order.deliveryAddress.street}</span>
//                 <span>{order.deliveryAddress.zipCode}</span>
//               </div>
//             )}
//           </div>

//         </div>

//       </div>
//     </div>
//   );
// };

// export default orderDetails;
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { SearchOrderStatus } from '../../redux/actions/trackOrders/orderStatus';
import '../../css/trackOrders/trackorders.css';

const OrderDetails = () => {
  const { id } = useParams();
  const [order, setOrder] = useState({});

  useEffect(() => {
    const fetchOrderInfo = async () => {
      const res = await SearchOrderStatus(id);
      if (res && res.data && res.data.data) {
        console.log(res.data.data.products);
        setOrder(res.data.data);
      } else {
        setOrder({});
      }
    };

    fetchOrderInfo();
  }, [id]);

  return (
    <div className="OrderDetailsPage">
      <div className="orderCard">
        <div className="OrderTitle">
          <h1>Order Details</h1>
        </div>
        <div className="orderDetails">
          <div className="orderCardItem">

            <h3>Order items</h3>
            <div className="orderItem Headers">
              <span>Id</span>
              <span>Quantity</span>
              <span>Price</span>
            </div>
            <div className="orderItems">
              {order.products && order.products.length > 0 ? (
                order.products.map((ord) => (
                  <div className="orderItem" key={ord.productId}>
                    <span>{ord.productId}</span>
                    <span>{ord.quantity}</span>
                    <span>{ord.price}</span>
                  </div>
                ))
              ) : (
                <span>No order items</span>
              )}
            </div>
          </div>
          <div className="orderCardItem orderStatus">
            <div className="orderstatusPosition">
              <span>{order.status}</span>
            </div>
          </div>
          <div className="orderCardItem">
            <h3>Payment Method</h3>
            <span>{order.paymentMethod}</span>
          </div>
          <div className="orderCardItem">
            <h3>Delivery Address</h3>
            {order.deliveryAddress && (
              <div className="deliveryAddressItems">
                <span>{order.deliveryAddress.country}</span>
                <span>{order.deliveryAddress.city}</span>
                <span>{order.deliveryAddress.street}</span>
                <span>{order.deliveryAddress.zipCode}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
