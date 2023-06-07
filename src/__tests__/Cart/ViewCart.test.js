/* eslint-disable padded-blocks */
/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable linebreak-style */
/* eslint-disable jest/no-standalone-expect */
/* eslint-disable linebreak-style */
/* eslint-disable jest/no-commented-out-tests */
/* eslint-disable linebreak-style */
/* eslint-disable jest/expect-expect */
/* eslint-disable linebreak-style */
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ViewCart from '../../components/Cart/ViewCart';

describe('ViewCart Component', () => {
  const profileData = [
    {
      id: 1,
      name: 'Product Name 1',
      image: 'product-image-1.jpg',
      totalPrice: 100,
      quantity: 3,
      price: 30,
      category: 'Product Category 1',
      createdAt: '2023-06-09',
    },
    {
      id: 2,
      name: 'Product Name 2',
      image: 'product-image-2.jpg',
      totalPrice: 50,
      quantity: 2,
      price: 25,
      category: 'Product Category 2',
      createdAt: '2023-06-10',
    },
  ];
  const deleteItem = jest.fn();
  const updateItem = jest.fn();
  const clearCart = jest.fn();
  beforeEach(() => {
    render(
      <ViewCart
        profileData={profileData}
        deleteItem={deleteItem}
        updateItem={updateItem}
        clearCart={clearCart}
      />,
    );
  });
  it('should render ViewCart component', () => {
    const viewCartElement = screen.getByTestId('view-cart-id');
    expect(viewCartElement).toBeInTheDocument();
  });
  it('should render cart items', () => {
    const cartItemsElement = screen.getByTestId('cart-items-id');
    expect(cartItemsElement).toBeInTheDocument();
    expect(screen.getByText('Product Name 1')).toBeInTheDocument();
    expect(screen.getByText('Product Name 2')).toBeInTheDocument();
  });
  it('should call clearCart when clear cart button is clicked', () => {
    const clearCartButton = screen.getByText('Clear cart');
    fireEvent.click(clearCartButton);
    expect(clearCart).toHaveBeenCalledTimes(1);
    screen.queryAllByTestId('cart-items-id');
  });

});
