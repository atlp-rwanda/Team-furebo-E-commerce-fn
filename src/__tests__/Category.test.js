import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';

import Category from '../components/Category';

describe('Category TESTS', () => {
  it('Should render Category', () => {
    render(
      <Router>
        <Provider store={store}>
          <Category data={{ image: 'image-url', category: 'Category Name' }} />
        </Provider>
      </Router>,
    );
    const category = screen.getByTestId('Category');
    expect(category).toBeInTheDocument();
  });
});
