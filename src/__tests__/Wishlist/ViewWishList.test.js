import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import ViewWishlist from '../../components/Wishlist/ViewWishList';
import store from '../../redux/store';

describe('ViewWishlist Component', () => {
  it('should render the ViewWishlist component', () => {
    render(
      <Router>
        <Provider store={store}>
          <ViewWishlist />
        </Provider>
      </Router>
    );

    expect(screen.getByTestId('view-wishlist')).toBeInTheDocument();
  });

  it('should display loading state while loading', () => {
    render(
      <Router>
        <Provider store={store}>
          <ViewWishlist />
        </Provider>
      </Router>
    );

    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('should display empty wishlist message when wishlist is empty', () => {
    render(
      <Router>
        <Provider store={store}>
          <ViewWishlist />
        </Provider>
      </Router>
    );
  });

  it('should display error message when error occurs', () => {
    const errorMessage = 'An error occurred.';
    store.dispatch({
      type: 'viewWishlist/fetchWishlistFailure',
      payload: errorMessage,
    });

    render(
      <Router>
        <Provider store={store}>
          <ViewWishlist />
        </Provider>
      </Router>
    );
  });

  it('should display wishlist items when wishlist is not empty', () => {
    const wishlistItems = [
      { id: 1, name: 'Item 1' },
      { id: 2, name: 'Item 2' },
      { id: 3, name: 'Item 3' },
    ];
    store.dispatch({
      type: 'viewWishlist/fetchWishlistSuccess',
      payload: wishlistItems,
    });

    render(
      <Router>
        <Provider store={store}>
          <ViewWishlist />
        </Provider>
      </Router>
    );
  });
});
