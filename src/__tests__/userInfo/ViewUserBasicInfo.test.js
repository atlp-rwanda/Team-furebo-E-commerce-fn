import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import ViewUserBasicInfo from '../../components/UserInfo/ViewUserBasicInfo';

describe('TEST VIEWING USER BASIC INFORMATION', () => {
  it('Should render user basic information', () => {
    const profileData = {
      firstName: 'John',
      lastName: 'Doe',
      email: 'johndoe@example.com',
      createdAt: '2023-05-30',
    };
    const profileImage = {
      profileImage: 'http://example.com/profile-image.jpg',
    };
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

    render(
      <Provider store={store}>
        <Router>
          <ViewUserBasicInfo
            profileData={profileData}
            profileImage={profileImage}
          />
        </Router>
      </Provider>,
    );

    const viewBasicElement = screen.getByTestId('viewBasic');
    expect(viewBasicElement).toBeInTheDocument();
  });
});
