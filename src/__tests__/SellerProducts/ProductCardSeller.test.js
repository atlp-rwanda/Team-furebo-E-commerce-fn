import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../redux/store';

import ProductCard from '../../components/ProductCard/ProductCardSeller';
import { BsLaptop } from 'react-icons/bs';

describe('ProductCardSeller Tests', () => {
  const productData = {
    id: '123', // Example ID value as a string
    image: 'image-url',
    name: 'Laptop',
    price: 18.55,
  };

  beforeEach(() => {
    render(
      <Router>
        <Provider store={store}>
          <ProductCard product={productData} />
        </Provider>
      </Router>,
    );
  });

  test('renders ProductCard component', () => {
    const productCard = screen.getByTestId('ProductCardSeller');
    expect(productCard).toBeInTheDocument();
  });
});
