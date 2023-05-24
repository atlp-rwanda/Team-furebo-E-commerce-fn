import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import '../css/navbar/Navbar.css';
import Navbar from '../components/Navbar';

describe('Navbar TESTS', () => {
  it('Should render navbar', () => {
    render(
      <Router>
        <Navbar />
      </Router>
    );
    const navbar = screen.getByTestId('navbar');
    expect(navbar).toBeInTheDocument();
  });
});
