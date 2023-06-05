import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import Footer from '../components/Footer';

describe('Footer TESTS', () => {
  it('Should render Footer', () => {
    render(
      <Router>
        <Footer />
      </Router>
    );
    const footer = screen.getByTestId('Footer');
    expect(footer).toBeInTheDocument();
  });
});
