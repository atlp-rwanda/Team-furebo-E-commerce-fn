/* eslint-disable no-use-before-define */
/* eslint-disable no-nested-ternary */

import React, { useEffect, useState } from 'react';
import { act } from 'react-dom/test-utils';
import FetchCartItemsAction from '../../redux/actions/Cart/FetchCartItemsAction';
import ViewCartItems from '../../components/Cart/ViewCart';
import deleteCartItemAction from '../../redux/actions/Cart/deleteCartItemAction';
import updateCartItemAction from '../../redux/actions/Cart/updateCartItemAction';
import clearCartAction from '../../redux/actions/Cart/clearCartAction';
import EmptyCartMessage from '../../components/Cart/EmptyCartMessage';
import '../../css/Cart/view-cart-items.css';

const ViewCartItemsPage = () => {
  const [profileData, setProfileData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProfileData();
  }, []);

  const fetchProfileData = async () => {
    try {
      const data = await FetchCartItemsAction();
      setProfileData(data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const deleteItem = async itemId => {
    try {
      await deleteCartItemAction(itemId);
      const updatedData = profileData.filter(item => item.id !== itemId);
      act(() => {
        setProfileData(updatedData);
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
        totalPrice
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
      await clearCartAction();

      act(() => {
        setProfileData([]);
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div data-testid="view-cart-page-id">
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
    </div>
  );
};

export default ViewCartItemsPage;
