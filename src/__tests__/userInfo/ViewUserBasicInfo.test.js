/* eslint-disable linebreak-style */
/* eslint-disable jest/expect-expect */
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../../redux/store';
import ViewUserBasicInfo from '../../components/UserInfo/ViewUserBasicInfo';

describe('ViewUserBasicInfo TESTS', () => {
  it('Should render ViewUserBasicInfo', () => {
    render(
      <Router>
        <Provider store={store}>
          <ViewUserBasicInfo />
        </Provider>
      </Router>,
    );
  });
});
