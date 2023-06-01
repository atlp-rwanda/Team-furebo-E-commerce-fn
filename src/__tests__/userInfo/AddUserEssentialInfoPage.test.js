/* eslint-disable padded-blocks */
/* eslint-disable no-trailing-spaces */
/* eslint-disable max-len */
/* eslint-disable linebreak-style */
import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import AddUserEssentialInfoPage from '../../pages/userInfo/AddUserEssentialInfoPage';

describe('USER INFORMATIONS TESTS', () => {
  it('Should render USER INFORMATIONS', () => {
    render(
      <Router>
        <AddUserEssentialInfoPage />
      </Router>,
    );
    const addEssential = screen.getByTestId('add-essential-page');
    expect(addEssential).toBeInTheDocument();
  });
  it('Should handle failed user profile update', async () => {
    const errorMessage = 'Failed to update user profile.';
    const mockAddUserEssentialInfoAction = jest.fn().mockRejectedValue(new Error(errorMessage));
    const navigate = jest.fn();
  
    render(
      <Router>
        <AddUserEssentialInfoPage AddUserEssentialInfoAction={mockAddUserEssentialInfoAction} navigate={navigate} />
      </Router>,
    );
  
    // Simulate form submission
    fireEvent.submit(screen.getByTestId('add-essential-page').querySelector('form'));

  });
  
});
