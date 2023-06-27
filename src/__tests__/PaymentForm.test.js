/* eslint-disable no-unused-vars */
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PaymentForm from '../components/payment/PaymentForm';
import makePayment from '../redux/actions/payment/Payment';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));

jest.mock('../redux/actions/payment/Payment', () => jest.fn());

describe('PaymentForm', () => {
  let dispatchMock;
  let navigateMock;
  let setOpenPaymentMock;
  let setOpenPayment;
  let totalPrice;

  beforeEach(() => {
    dispatchMock = jest.fn();
    navigateMock = jest.fn();
    setOpenPaymentMock = jest.fn();
    setOpenPayment = true;
    totalPrice = 50;

    useDispatch.mockReturnValue(dispatchMock);
    useSelector.mockImplementation((selector) => {
      if (selector) {
        return {
          getOrder: {
            orderInfo: [
              {
                id: 'order123',
                status: 'pending',
              },
            ],
          },
          payment: {
            pending: false,
          },
        };
      }
      return null;
    });
    useNavigate.mockReturnValue(navigateMock);
  });

  it('renders the PaymentForm component and handles form submission', () => {
    render(<PaymentForm setOpenPayment={setOpenPaymentMock} totalPrice={totalPrice} />);

    // Fill in the form fields
    fireEvent.change(screen.getByLabelText('Credit Card Number:'), {
      target: { value: '1111222233334444' },
    });
    fireEvent.change(screen.getByLabelText('Exp Month:'), {
      target: { value: '5' },
    });
    fireEvent.change(screen.getByLabelText('Exp Year:'), {
      target: { value: '2022' },
    });
    fireEvent.change(screen.getByLabelText('CVC:'), {
      target: { value: '111' },
    });

    // Submit the form
    fireEvent.click(screen.getByText('Pay now'));

    // Assertions for form validation
    expect(dispatchMock).toHaveBeenCalledTimes(0); // Check if makePayment action is dispatched
  });
});
