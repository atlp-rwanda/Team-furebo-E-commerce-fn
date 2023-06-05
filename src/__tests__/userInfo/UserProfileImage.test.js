/* eslint-disable linebreak-style */
/* eslint-disable jest/expect-expect */
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../../redux/store';
import UserProfileImage from '../../components/UserInfo/UserProfileImage';

describe('UserProfileImage TESTS', () => {
  it('Should render UserProfileImage', () => {
    render(
      <Router>
        <Provider store={store}>
          <UserProfileImage />
        </Provider>
      </Router>,
    );
  });
});
