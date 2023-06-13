/* eslint-disable linebreak-style */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { useDispatch } from 'react-redux';
import ClearCartButtons from '../../components/Cart/ClearCartButtons';
import clearCart from '../../redux/actions/Cart/ClearCartItemAction';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
}));

jest.mock('../../redux/actions/Cart/ClearCartItemAction', () => jest.fn());

describe('ClearCartButtons', () => {
  let dispatchMock;

  beforeEach(() => {
    dispatchMock = jest.fn();
    useDispatch.mockReturnValue(dispatchMock);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should dispatch clearCart action on button click', () => {
    const { getByTestId } = render(<ClearCartButtons />);
    const button = getByTestId('clear-button');
    fireEvent.click(button);
    expect(dispatchMock).toHaveBeenCalledWith(clearCart());
  });
});
