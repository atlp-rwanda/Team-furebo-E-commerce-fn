import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import EditUserBasicPage from '../../pages/userInfo/EditUserBasicPage';

describe('USER INFORMATIONS TESTS', () => {
  it('Should render USER INFORMATIONS', () => {
    render(
      <Router>
        <EditUserBasicPage />
      </Router>
    );
    const essential = screen.getByTestId('editBasicPage');
    expect(essential).toBeInTheDocument();
  });
});
