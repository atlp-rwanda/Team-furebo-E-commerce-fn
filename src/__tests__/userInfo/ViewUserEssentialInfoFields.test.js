/* eslint-disable linebreak-style */
/* eslint-disable jest/expect-expect */
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../../redux/store';
import ViewUserEssentialInfoFields from '../../components/UserInfo/ViewUserEssentialInfoFields';

describe('ViewUserEssentialInfoFields TESTS', () => {
  it('Should render ViewUserEssentialInfoFields', () => {
    render(
      <Router>
        <Provider store={store}>
          <ViewUserEssentialInfoFields />
        </Provider>
      </Router>,
    );
    const ViewUserEssentialInfoField = screen.getByTestId('user-essential-info-container');
    expect(ViewUserEssentialInfoField).toBeInTheDocument();
  });
});
