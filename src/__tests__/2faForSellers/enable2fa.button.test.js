import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import TwoFaCheckbox from '../../components/enable2FA.button';
import store from '../../redux/store'; // Import your Redux store
import enable2FAForMerchants from '../../redux/actions/2faForSellers/enable2fa.action';
import disable2FAForMerchants from '../../redux/actions/2faForSellers/disable2fa.action';
import Fetch2FaStatus from '../../redux/actions/2faForSellers/Fetch2faStatus.action';

jest.mock('../../redux/actions/2faForSellers/enable2fa.action');
jest.mock('../../redux/actions/2faForSellers/disable2fa.action');
jest.mock('../../redux/actions/2faForSellers/Fetch2faStatus.action');

describe('TwoFaCheckbox', () => {
  test('renders checkbox and handles change correctly', async () => {
    const mockNavigate = jest.fn();

    Fetch2FaStatus.mockResolvedValueOnce({ enable2FA: false });

    render(
      <Provider store={store}>
        <Router>
          <TwoFaCheckbox />
        </Router>
      </Provider>
    );

    const checkboxInput = screen.getByRole('checkbox');
    const checkboxLabel = screen.getByText('OFF');

    expect(checkboxInput).toBeInTheDocument();
    expect(checkboxInput).not.toBeChecked();
    expect(checkboxLabel).toBeInTheDocument();

    fireEvent.click(checkboxInput);

    await waitFor(() => {
      expect(enable2FAForMerchants).toHaveBeenCalledTimes(1);
      expect(enable2FAForMerchants).toHaveBeenCalledWith(expect.any(Function));
      expect(checkboxInput).toBeChecked();
      expect(checkboxLabel).toHaveTextContent('ON');
    });

    fireEvent.click(checkboxInput);

    await waitFor(() => {
      expect(disable2FAForMerchants).toHaveBeenCalledTimes(1);
      expect(checkboxInput).not.toBeChecked();
      expect(checkboxLabel).toHaveTextContent('OFF');
    });
  });
});
