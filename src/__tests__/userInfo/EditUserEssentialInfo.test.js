import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import EditUserEssentialInfo from '../../components/UserInfo/EditUserEssentialInfo';
import '../../css/profile/Edit-EssentialInfo.css';

describe('TEST EDITING ESSENTIAL INFORMATION', () => {
  it('Should render where to edit user essential info', () => {
    render(
      <Router>
        <EditUserEssentialInfo
          gender=""
          birthdate=""
          preferredLanguage=""
          preferredCurrency=""
          homeAddress=""
          street=""
          city=""
          country=""
          poBoxNumber=""
          zipCode=""
          phoneNumber=""
          profileImage=""
          onChange={() => {}}
          onSubmit={() => {}}
        />
      </Router>
    );

    // Ensure the target element is present in the rendered component
    const editEssentialInfoElement = screen.getByTestId('editEssential');
    expect(editEssentialInfoElement).toBeInTheDocument();
  });
});
