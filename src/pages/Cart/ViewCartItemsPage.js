/* eslint-disable no-use-before-define */
/* eslint-disable no-nested-ternary */

import React, { useEffect, useState } from 'react';
import { act } from 'react-dom/test-utils';
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import FetchCartItemsAction from '../../redux/actions/Cart/FetchCartItemsAction';
import ViewCartItems from '../../components/Cart/ViewCart';
import { updateSuccess } from '../../redux/slices/fetchCartItemsSlice';
import deleteCartItemAction from '../../redux/actions/Cart/deleteCartItemAction';
import updateCartItemAction from '../../redux/actions/Cart/updateCartItemAction';
import clearCartAction from '../../redux/actions/Cart/clearCartAction';
import EmptyCartMessage from '../../components/Cart/EmptyCartMessage';
import '../../css/Cart/view-cart-items.css';

const ViewCartItemsPage = () => {
  const dispatch = useDispatch();
  const [profileData, setProfileData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProfileData();
  }, []);

  const fetchProfileData = async () => {
    try {
      const data = await FetchCartItemsAction(dispatch);
      setProfileData(data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const deleteItem = async (itemId) => {
    try {
      await deleteCartItemAction(itemId, dispatch);
      const updatedData = profileData.filter((item) => item.id !== itemId);
      act(() => {
        setProfileData(updatedData);
        dispatch(updateSuccess(updatedData));
      });
    } catch (error) {
      console.error(error);
    }
  };

  const updateItem = async (itemId, quantity, totalPrice) => {
    try {
      const updatedData = await updateCartItemAction(
        itemId,
        quantity,
        totalPrice,
        dispatch,
      );
      act(() => {
        setProfileData(updatedData);
      });
    } catch (error) {
      console.error(error);
    }
  };

  const clearCart = async () => {
    try {
      await clearCartAction(dispatch);

      act(() => {
        setProfileData([]);
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      data-testid="view-cart-page-id"
    >
      {loading ? (
        <p>Loading...</p>
      ) : profileData.length > 0 ? (
        <ViewCartItems
          profileData={profileData}
          deleteItem={deleteItem}
          updateItem={updateItem}
          clearCart={clearCart}
        />
      ) : (
        <EmptyCartMessage />
      )}
    </motion.div>
  );
};

export default ViewCartItemsPage;
