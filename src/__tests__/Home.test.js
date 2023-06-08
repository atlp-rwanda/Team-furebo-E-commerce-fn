import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../components/Home';

describe('Home Component', () => {
  it('renders the heading correctly', () => {
    render(<Home />);
    const headingElement = screen.getByRole('heading', {
      name: /HELLO, FRONT-END/i,
    });
    expect(headingElement).toBeInTheDocument();
  });
});
