import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import ViewUserEssentialInfo from '../../components/UserInfo/ViewUserEssentialInfo';

describe('TEST VIEWING USER ESSENTIAL INFORMATION', () => {
  it('Should render user essential information', () => {
    const profileData = {
      gender: 'Male',
      birthdate: '1990-01-01',
      preferredLanguage: 'English',
      preferredCurrency: 'USD',
      phoneNumber: '123456789',
      street: '123 Main St',
      city: 'City',
      country: 'Country',
      poBoxNumber: 'PO Box 123',
      zipCode: '12345',
    };

    render(
      <Router>
        <ViewUserEssentialInfo profileData={profileData} />
      </Router>
    );

    const viewEssentialElement = screen.getByTestId('viewEssential');
    expect(viewEssentialElement).toBeInTheDocument();
  });

  it('Should render "unknown" for missing essential information', () => {
    const profileData = {};

    render(
      <Router>
        <ViewUserEssentialInfo profileData={profileData} />
      </Router>
    );
  });
});
