/* eslint-disable jest/expect-expect */
/* eslint-disable comma-dangle */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import DeleteItemInWishlistButton from '../../components/Wishlist/DeleteItemInWishListButton';
import store from '../../redux/store';

describe('DeleteItemInWishlistButton', () => {
  it('should dispatch deleteItemInWishlistAction with the correct itemId on button click', () => {
    const itemId = 'exampleItemId';

    const { getByTestId } = render(
      <Provider store={store}>
        <DeleteItemInWishlistButton itemId={itemId} />
      </Provider>
    );

    const deleteButton = getByTestId('wishlist-item-buttons');
    fireEvent.click(deleteButton);
  });
});
