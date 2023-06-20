import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import Profile from '../components/Profire';

describe('Profile TESTS', () => {
  it('Should render profile', () => {
    render(
      <Router>
        <Profile />
      </Router>
    );
    const profile = screen.getByTestId('profile');
    expect(profile).toBeInTheDocument();
  });
});
