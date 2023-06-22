import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import BasicUserInfoPage from '../../pages/userInfo/BasicUserInfoPage';

import {
  fetchUserBasicProfile,
  fetchUserProfileImage,
} from '../../redux/actions/userProfile/FetchBasicInfoAction';

jest.mock('../../redux/actions/userProfile/FetchBasicInfoAction');

describe('USER INFORMATION TESTS', () => {
  it('Should render Essential Information', async () => {
    const fullName = 'John Doe';
    const mockStore = configureStore([]);
    const store = mockStore({
      user: {
        userInfo: {
          userData: {
            fullname: fullName,
          },
        },
      },
    });
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
      <Provider store={store}>
        <Router>
          <BasicUserInfoPage />
        </Router>
      </Provider>
    );

    await waitFor(
      () => {
        const essential = screen.getByTestId('view-basic-page');
        expect(essential).toBeInTheDocument();
      },
      { timeout: 5000 },
    ); // Increase timeout if necessary
  });
});
