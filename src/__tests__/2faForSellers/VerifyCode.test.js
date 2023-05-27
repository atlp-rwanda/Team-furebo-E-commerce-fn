import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter as Router} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import VerifyCode from '../../components/verifyCode';

import verifyOTPCode from '../../redux/actions/2faForSellers/verifyOTP.action';

jest.mock('../../redux/actions/2faForSellers/verifyOTP.action');

describe('VerifyCode TESTS', () => {
  beforeEach(() => {
    verifyOTPCode.mockClear();
  });
  test('Should render VerifyCode', () => {
    render(
      <Provider store={store}>
        <Router>
          <VerifyCode />
        </Router>
      </Provider>
    );
    const verificationPage = screen.getByTestId('VerifyCode');
    expect(verificationPage).toBeInTheDocument();
  });

  test('submits the form with the OTP code', () => {
    render(
      <Provider store={store}>
        <Router>
          <VerifyCode />
        </Router>
        <ToastContainer />
      </Provider>
    );
    jest.spyOn(toast, 'success');
    jest.spyOn(toast, 'error');
    const codeInputs = screen.getAllByRole('textbox');
    codeInputs.forEach((input, index) => {
      fireEvent.change(input, { target: { value: '1' } });
    });

    fireEvent.submit(screen.getByTestId('verify-form'));

    expect(verifyOTPCode).toHaveBeenCalledWith(
      '111111',
      expect.any(Function),
      expect.any(Function),
    );
  });
  test('focuses on the previous input when ArrowLeft key is pressed', () => {
    const { getAllByRole } = render(
      <Provider store={store}>
        <Router>
          <VerifyCode />
        </Router>
        <ToastContainer />
      </Provider>
    );
    const codeInputs = getAllByRole('textbox');

    fireEvent.keyDown(codeInputs[1], { key: 'ArrowLeft' });

    expect(document.activeElement).toBe(codeInputs[0]);
    
    fireEvent.keyDown(codeInputs[0], { key: 'ArrowRight' });
    expect(document.activeElement).toBe(codeInputs[1]);
  
    // Simulate Backspace keydown event on the second input with empty value
    fireEvent.keyDown(codeInputs[1], { key: 'Backspace' });
    expect(document.activeElement).toBe(codeInputs[0]);
  });
});
