import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import EssentialUserInfoPage from '../../pages/userInfo/EssentialUserInfoPage';

describe('USER INFORMATIONS TESTS', () => {
  it('Should render Essential Information', async () => {
    render(
      <Router>
        <EssentialUserInfoPage />
      </Router>,
    );



    const essential = screen.getByTestId('view-essential-page');
    expect(essential).toBeInTheDocument();
  });
});
