/* eslint-disable linebreak-style */
/* eslint-disable jest/expect-expect */
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../../redux/store';
import AddEssentialInfoFields from '../../components/UserInfo/AddEssentialInfoFields';

describe('AddEssentialInfoFields TESTS', () => {
  it('Should render AddEssentialInfoFields', () => {
    const formData = {
      gender: '',
      birthdate: '',
      preferredLanguage: '',
      preferredCurrency: '',
      homeAddress: '',
      street: '',
      city: '',
      country: '',
      poBoxNumber: '',
      zipCode: '',
      phoneNumber: '',
      profileImage: '',
    };
    const handleChange = {};
    const nextPart = {};
    const setNextPart = {};

    render(
      <Router>
        <Provider store={store}>
          <AddEssentialInfoFields
            formData={formData}
            handleChange={handleChange}
            nextPart={nextPart}
            setNextPart={setNextPart}
          />
        </Provider>
      </Router>,
    );

    const AddEssentialInfoField = screen.getByTestId('user-essential-info');
    expect(AddEssentialInfoField).toBeInTheDocument();
  });
});
