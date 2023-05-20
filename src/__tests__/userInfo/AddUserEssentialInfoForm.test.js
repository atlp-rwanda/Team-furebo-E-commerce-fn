import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import AddUserEssentialInfoPage from '../../pages/userInfo/AddUserEssentialInfoPage';

jest.mock('../../redux/actions/userProfile/AddUserEssentialInfoAction', () => ({
  __esModule: true,
  default: jest.fn().mockResolvedValue({}),
}));

describe('TEST ADDING ESSENTIAL INFORMATION', () => {
  it('Should render where to add user essential info', () => {
    render(
      <Router>
        <AddUserEssentialInfoPage />
      </Router>
    );

    const addEssentialInfo = screen.getByTestId('addEssential');
    expect(addEssentialInfo).toBeInTheDocument();
  });
});
