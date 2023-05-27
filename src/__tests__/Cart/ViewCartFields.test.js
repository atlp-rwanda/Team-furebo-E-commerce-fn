/* eslint-disable linebreak-style */

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ViewCartFields from '../../components/Cart/ViewCartFields';

describe('ViewCartFields Component', () => {
  it('should render ViewCartFields component', () => {
    const item = {
      id: 1,
      name: 'Product Name',
      image: 'product-image.jpg',
      totalPrice: 100,
      quantity: 3,
      price: 30,
      category: 'Product Category',
      createdAt: '2023-06-09',
    };
    const deleteItem = jest.fn();
    const updateItem = jest.fn();
    const showQuantityEdit = true;
    const handleIncrement = jest.fn();
    const handleDecrement = jest.fn();
    const toggleQuantityEdit = jest.fn();

    render(
      <ViewCartFields
        item={item}
        deleteItem={deleteItem}
        updateItem={updateItem}
        showQuantityEdit={showQuantityEdit}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
        toggleQuantityEdit={toggleQuantityEdit}
      />
    );

    const decrementButton = screen.getByTestId('btn-minus-id');
    const incrementButton = screen.getByTestId('btn-plus-id');
    const editIconButton = screen.getByTestId('icon-edit-id');
    const deleteButton = screen.getByTestId('btn-delete-id');

    fireEvent.click(decrementButton);
    expect(handleDecrement).toHaveBeenCalledWith(item.id);

    fireEvent.click(incrementButton);
    expect(handleIncrement).toHaveBeenCalledWith(item.id);

    fireEvent.click(editIconButton);
    expect(toggleQuantityEdit).toHaveBeenCalledWith(item.id);

    fireEvent.click(deleteButton);

    expect(deleteItem).toHaveBeenCalledTimes(1);
    expect(deleteItem).toHaveBeenCalledWith(item.id);
  });
});
