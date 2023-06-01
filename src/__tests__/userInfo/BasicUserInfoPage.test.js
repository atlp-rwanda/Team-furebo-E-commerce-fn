import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import BasicUserInfoPage from '../../pages/userInfo/BasicUserInfoPage';

describe('USER INFORMATIONS TESTS', () => {
  it('Should render Essential Information', async () => {
    render(
      <Router>
        <BasicUserInfoPage />
      </Router>,
    );
    const essential = screen.getByTestId('view-basic-page');
    expect(essential).toBeInTheDocument();
  });
});
