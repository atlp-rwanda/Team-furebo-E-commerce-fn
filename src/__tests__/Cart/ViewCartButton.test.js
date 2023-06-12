/* eslint-disable linebreak-style */
/* eslint-disable indent */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import ViewCartButton from '../../components/Cart/ViewCartButton';
import { fetchCartItems } from '../../redux/actions/Cart/ViewCartItemsAction';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
}));

jest.mock('react-router-dom', () => ({
  Link: jest.fn(({ children, onClick }) => <a onClick={onClick}>{children}</a>),
}));

jest.mock('../../redux/actions/Cart/ViewCartItemsAction', () => ({
  fetchCartItems: jest.fn(),
}));

describe('ViewCartButton', () => {
  let dispatchMock;

  beforeEach(() => {
    dispatchMock = jest.fn();
    useDispatch.mockReturnValue(dispatchMock);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should dispatch fetchCartItems action on button click', () => {
    const { getByTestId } = render(<ViewCartButton />);
    const link = getByTestId('view-cart-button').querySelector('a');
    fireEvent.click(link);
    expect(dispatchMock).toHaveBeenCalledWith(fetchCartItems());
  });
});
