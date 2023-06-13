/* eslint-disable jest/expect-expect */
/* eslint-disable comma-dangle */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import ClearWishlistButton from '../../components/Wishlist/ClearWishListButton';
import store from '../../redux/store';

describe('ClearWishlistButton', () => {
  it('should dispatch clearWishlistAction on button click', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <ClearWishlistButton />
      </Provider>
    );

    const clearButton = getByTestId('clear-wishlist-button');
    fireEvent.click(clearButton);
  });
});
