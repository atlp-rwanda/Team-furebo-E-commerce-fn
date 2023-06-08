import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import BasicUserInfoPage from '../../pages/userInfo/BasicUserInfoPage';

import {
  fetchUserBasicProfile,
  fetchUserProfileImage,
} from '../../redux/actions/userProfile/FetchBasicInfoAction';

jest.mock('../../redux/actions/userProfile/FetchBasicInfoAction');

describe('USER INFORMATION TESTS', () => {
  it('Should render Essential Information', async () => {
    // Mock the fetchUserBasicProfile function
    fetchUserBasicProfile.mockResolvedValue({
      firstName: 'John',
      lastName: 'Doe',
      email: 'johndoe@example.com',
    });

    // Mock the fetchUserProfileImage function
    fetchUserProfileImage.mockResolvedValue({
      profileImage:
        'https://tvline.com/wp-content/uploads/2014/06/24lad_ep9-sc917_cr-019.jpg',
    });

    render(
      <Router>
        <BasicUserInfoPage />
      </Router>
    );

    await waitFor(
      () => {
        const essential = screen.getByTestId('view-basic-page');
        expect(essential).toBeInTheDocument();
      },
      { timeout: 5000 }
    ); // Increase timeout if necessary
  });
});
