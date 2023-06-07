import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import EditUserEssentialInfoPage from '../../pages/userInfo/EditUserEssentialInfoPage';
import {
  fetchUserProfile,
  updateUserProfile,
} from '../../redux/actions/userProfile/EditUserEssentialInfoAction';

jest.mock('../../redux/actions/userProfile/EditUserEssentialInfoAction');

describe('USER INFORMATIONS TESTS', () => {
  beforeEach(() => {
    fetchUserProfile.mockResolvedValue({
      gender: 'Male',
      birthdate: '1990-01-01',
      preferredLanguage: 'English',
      preferredCurrency: 'USD',
      homeAddress: '123 Main Street',
      street: 'Main Street',
      city: 'City',
      country: 'Country',
      poBoxNumber: '12345',
      zipCode: '12345',
      phoneNumber: '1234567890',
      profileImage:
        'https://pbs.twimg.com/profile_images/643271279/Screen_shot_2010-01-20_at_1.17.37_AM_400x400.png',
    });
  });

  it('should allow user input and form submission', async () => {
    render(
      <Router>
        <EditUserEssentialInfoPage />
      </Router>
    );

    // Simulate user input
    fireEvent.change(screen.getByLabelText('Gender'), {
      target: { value: 'Female' },
    });
    fireEvent.change(screen.getByLabelText('Birthdate'), {
      target: { value: '1995-01-01' },
    });
    fireEvent.change(screen.getByLabelText('Preferred Language'), {
      target: { value: 'Spanish' },
    });
    // Simulate input for other form fields
    fireEvent.change(screen.getByLabelText('Preferred Currency'), {
      target: { value: 'EUR' },
    });
    fireEvent.change(screen.getByLabelText('Home Address'), {
      target: { value: '456 Park Avenue' },
    });
    fireEvent.change(screen.getByLabelText('Street'), {
      target: { value: 'Park Avenue' },
    });
    fireEvent.change(screen.getByLabelText('City'), {
      target: { value: 'New York' },
    });
    fireEvent.change(screen.getByLabelText('Country'), {
      target: { value: 'USA' },
    });
    fireEvent.change(screen.getByLabelText('PO Box Number'), {
      target: { value: '67890' },
    });
    fireEvent.change(screen.getByLabelText('Zip Code'), {
      target: { value: '67890' },
    });
    fireEvent.change(screen.getByLabelText('Phone Number'), {
      target: { value: '0987654321' },
    });
    fireEvent.change(screen.getByLabelText('Profile Image'), {
      target: {
        value:
          'https://pbs.twimg.com/profile_images/643271279/Screen_shot_2010-01-20_at_1.17.37_AM_400x400.png',
      },
    });

    // Simulate form submission
    fireEvent.submit(screen.getByTestId('editEssential'));
  });
});
