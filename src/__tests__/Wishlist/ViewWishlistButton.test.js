import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import ViewWishlistButton from '../../components/Wishlist/ViewWishListButton';
import store from '../../redux/store';

describe('ViewWishlistButton', () => {
  it('should dispatch fetchWishlist action on link click', () => {
    const { getByTestId } = render(
      <Router>
        <Provider store={store}>
          <ViewWishlistButton />
        </Provider>
      </Router>
    );

    const link = getByTestId('view-wishlist-link');
    fireEvent.click(link);
  });
});
