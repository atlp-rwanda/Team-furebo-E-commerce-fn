/* eslint-disable jest/expect-expect */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import IsInWishlistButton from '../../components/Wishlist/IsInWishlistButton';
import store from '../../redux/store';

describe('IsInWishlistButton', () => {
  it('should dispatch addToWishlistAction with the correct productId on button click', () => {
    const productId = 'exampleProductId';

    const { getByTestId } = render(
      <Provider store={store}>
        <IsInWishlistButton productId={productId} />
      </Provider>
    );

    const addToWishlistButton = getByTestId('in-wishlist-field to-wishlist');
    fireEvent.click(addToWishlistButton);
  });
});
