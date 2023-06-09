import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import EditUserBasicPage from '../../pages/userInfo/EditUserBasicPage';
import { updateUserProfile } from '../../redux/actions/userProfile/EditUserBasicInfoAction';

jest.mock('../../redux/actions/userProfile/EditUserBasicInfoAction', () => ({
  fetchUserProfile: jest.fn().mockResolvedValue({
    firstName: 'John',
    lastName: 'Doe',
    email: 'johndoe@example.com',
  }),
  updateUserProfile: jest.fn().mockResolvedValue(),
}));

describe('USER INFORMATIONS TESTS', () => {
  it('Should render USER INFORMATIONS', () => {
    render(
      <Router>
        <EditUserBasicPage />
      </Router>
    );
    const essential = screen.getByTestId('editBasicPage');
    expect(essential).toBeInTheDocument();
  });
  test('renders the form and submits user information', async () => {
    // Mock the updateUserProfile function
    updateUserProfile.mockResolvedValue();

    render(
      <Router>
        <EditUserBasicPage />
      </Router>
    );
    // Change the input values
    fireEvent.change(screen.getByLabelText('First Name'), {
      target: { value: 'Jane' },
    });
    fireEvent.change(screen.getByLabelText('Last Name'), {
      target: { value: 'Smith' },
    });
    fireEvent.change(screen.getByLabelText('Email'), {
      target: { value: 'janesmith@example.com' },
    });

    // Submit the form
    fireEvent.submit(screen.getByTestId('editBasicPage').querySelector('form'));

    // Assert that the updateUserProfile function is called with the updated user information
    expect(updateUserProfile).toHaveBeenCalledWith(
      'Jane',
      'Smith',
      'janesmith@example.com'
    );

    // Assert that the success message is displayed
    expect(await screen.findByText('User information updated successfully!')).toBeInTheDocument();
  });
});

