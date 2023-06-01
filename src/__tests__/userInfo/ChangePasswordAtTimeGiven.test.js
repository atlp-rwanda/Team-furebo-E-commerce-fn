import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import ChangePasswordAtTimeGiven from '../../components/UserInfo/ChangePasswordAtTimeGiven';
import FetchToChangePasswordAtGivenTime from '../../redux/actions/userProfile/FetchToChangePasswordAtGivenTime';

jest.mock('../../redux/actions/userProfile/FetchToChangePasswordAtGivenTime');

describe('TEST NOTIFY USER TO CHANGE PASSWORD', () => {
  it('Should render notify user to change password', async () => {
    FetchToChangePasswordAtGivenTime.mockResolvedValue({ isExpired: true });

    render(
      <Router>
        <ChangePasswordAtTimeGiven />
      </Router>,
    );

    const notify = await screen.findByTestId('ChangePasswordAtTimeGiven');
    expect(notify).toBeInTheDocument();
  });
});
