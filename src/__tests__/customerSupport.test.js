import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';
import CustomerSupport from '../components/customerSupport/customerSupport';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

describe('customerSupport', () => {
  beforeEach(() => {
    useSelector.mockImplementation((selector) =>
      selector({
        user: {
          userInfo: {
            fullname: 'John Doe',
            email: 'johndoe@example.com',
          },
        },
      })
    );
    useDispatch.mockReturnValue(jest.fn());
  });

  test('renders the component', () => {
    render(<CustomerSupport />);


    expect(screen.getByText('Customer Support')).toBeInTheDocument();
    expect(screen.getByLabelText('Your Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Your Email')).toBeInTheDocument();
    expect(screen.getByLabelText('Your Message')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Send message' })).toBeInTheDocument();
  });

  test('submits the form', () => {
    render(<CustomerSupport />);


    fireEvent.change(screen.getByLabelText('Your Message'), { target: { value: 'Test message' } });


    fireEvent.click(screen.getByRole('button', { name: 'Send message' }));

    expect(useDispatch).toHaveBeenCalled();
  });
});
