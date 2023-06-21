/* eslint-disable linebreak-style */
import React from 'react';
import { useDispatch } from 'react-redux';
import { AiTwotoneDelete } from 'react-icons/ai';
import deleteCartItemAction from '../../redux/actions/Cart/DeleteCartItemAction';

const DeleteCartButtons = ({ cartItemId }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteCartItemAction(cartItemId));
  };

  return (
    <div data-testid="delete-cart-item-btn" className="delete-cart-item-btn">
      <AiTwotoneDelete onClick={handleDelete} className="remove-cart-btn" />
    </div>
  );
};

export default DeleteCartButtons;
