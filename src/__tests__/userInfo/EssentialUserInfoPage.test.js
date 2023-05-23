import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import EssentialUserInfoPage from '../../pages/userInfo/EssentialUserInfoPage';

describe('USER INFORMATIONS TESTS', () => {
  it('Should render Essential Information', async () => {
    render(
      <Router>
        <EssentialUserInfoPage />
      </Router>
    );

    // Wait for the loading state to become false
    await waitFor(() => {
      const loadingElement = screen.queryByText('Wait...');
      expect(loadingElement).not.toBeInTheDocument();
    });

    const essential = screen.getByTestId('view-essential-page');
    expect(essential).toBeInTheDocument();
  });
});
