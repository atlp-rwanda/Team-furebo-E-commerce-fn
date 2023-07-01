/* eslint-disable linebreak-style */
/* eslint-disable jest/expect-expect */
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../../redux/store';
import AddUserEssentialInfo from '../../components/UserInfo/AddUserEssentialInfo';

describe('AddUserEssentialInfo TESTS', () => {
  it('Should render AddUserEssentialInfo', () => {
    render(
      <Router>
        <Provider store={store}>
          <AddUserEssentialInfo />
        </Provider>
      </Router>,
    );
  });
});
