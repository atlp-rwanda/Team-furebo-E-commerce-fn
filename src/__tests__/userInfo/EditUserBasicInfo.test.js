import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import EditUserBasicInfo from '../../components/UserInfo/EditUserBasicInfo ';
import '../../css/profile/Edit-basicInfo.css';

describe('TEST EDITING BASIC INFORMATION', () => {
  it('should render correctly', () => {
    const handleSubmit = jest.fn();
    const handleFirstNameChange = jest.fn();
    const handleLastNameChange = jest.fn();
    const handleEmailChange = jest.fn();

    const { getByTestId, getByLabelText, getByText } = render(
      <Router>
        <EditUserBasicInfo
          firstName=""
          lastName=""
          email=""
          message=""
          isSuccess={false}
          handleSubmit={handleSubmit}
          handleFirstNameChange={handleFirstNameChange}
          handleLastNameChange={handleLastNameChange}
          handleEmailChange={handleEmailChange}
        />
      </Router>
    );
  });
});
