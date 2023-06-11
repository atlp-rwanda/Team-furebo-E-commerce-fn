/* eslint-disable linebreak-style */
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import UpdateCart from '../../components/Cart/UpdateCart';

describe('UpdateCart Component', () => {
  it('should render UpdateCart component', () => {
    const item = {
      id: 1,
      quantity: 3,
    };
    const deleteItem = jest.fn();
    const showQuantityEdit = true;
    const handleDecrement = jest.fn();
    const handleIncrement = jest.fn();
    const toggleQuantityEdit = jest.fn();

    render(
      <UpdateCart
        item={item}
        deleteItem={deleteItem}
        showQuantityEdit={showQuantityEdit}
        handleDecrement={handleDecrement}
        handleIncrement={handleIncrement}
        toggleQuantityEdit={toggleQuantityEdit}
      />
    );

    const updateCartQuantityElement = screen.getByTestId('update-cart-id');
    expect(updateCartQuantityElement).toBeInTheDocument();

    const decrementButton = screen.getByTestId('btn-minus-id');
    const incrementButton = screen.getByTestId('btn-plus-id');
    const editIconButton = screen.getByTestId('icon-edit-id');

    fireEvent.click(decrementButton);
    expect(handleDecrement).toHaveBeenCalledWith(item.id);

    fireEvent.click(incrementButton);
    expect(handleIncrement).toHaveBeenCalledWith(item.id);

    fireEvent.click(editIconButton);
    expect(toggleQuantityEdit).toHaveBeenCalledWith(item.id);
  });
});
