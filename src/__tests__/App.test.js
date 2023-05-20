import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

jest.mock('../css/navbar/navbar.css', () => {});

describe('App', () => {
  it('renders without errors', () => {
    render(<App />);

    // Check if Navbar component is rendered
    const navbar = screen.getByTestId('navbar');
    expect(navbar).toBeInTheDocument();
  });
});
