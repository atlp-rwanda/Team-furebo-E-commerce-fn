import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';

import ProductCard from '../components/ProductCard';

describe('ProductCard Tests', () => {
  const productData = {
    id: '123', // Example ID value as a string
    image: 'image-url',
    title: 'Product Name',
    price: 18.55,
    rating: 5,
  };

  beforeEach(() => {
    render(
      <Router>
        <Provider store={store}>
          <ProductCard data={productData} />
        </Provider>
      </Router>
    );
  });

  test('renders ProductCard component', () => {
    const productCard = screen.getByTestId('ProductCard');
    expect(productCard).toBeInTheDocument();
  });
});
