import React, { useState } from 'react';
import {
  render, screen, fireEvent, waitFor, renderHook, act,
} from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import UpdateProduct from '../components/UpdateProduct';

const mockStore = configureStore([]);
global.URL.createObjectURL = jest.fn();
jest.mock('../redux/actions/SellerProduct.js');

describe('UpdateProduct', () => {
  const productData = {
    id: 1,
    image: ['image-URL', 'image-URL', 'image-URL', 'image-URL'],
    name: 'Television',
    category: 'Electronics',
    price: 900,
    exDate: '01-01-2024',
    quantity: 10,
  };
  const store = mockStore({
    products: {
      updateProduct: productData,
      loading: false,
    },
  });

  beforeEach(() => {
    render(
      <Router>
        <Provider store={store}>
          <UpdateProduct item={productData} />
        </Provider>
      </Router>,
    );
  });
  test('validateForm should validate the form fields correctly', () => {
    const nameInput = screen.getByLabelText('Name:');
    const imagesInput = screen.getByTestId('addImage');
    const priceInput = screen.getByLabelText('Price:');
    const quantityInput = screen.getByLabelText('Quantity:');
    const categoryInput = screen.getByLabelText('Category:');
    const expiredDateInput = screen.getByLabelText('Expired Date:');
    const submitButton = screen.getByTestId('updateProduct');
    fireEvent.change(nameInput, { target: { value: 'Product Name' } });
    fireEvent.change(imagesInput, {
      target: { files: [new File([], 'image.png')] },
    });
    fireEvent.change(priceInput, { target: { value: '10' } });
    fireEvent.change(quantityInput, { target: { value: '5' } });
    fireEvent.change(categoryInput, { target: { value: 'Category' } });
    fireEvent.change(expiredDateInput, { target: { value: '2023-12-31' } });
    fireEvent.click(submitButton);
    expect(screen.queryByText(/is required/i)).toBeNull();
  });
  it('Should render UpdateProduct', () => {
    const updateProduct = screen.getByTestId('UpdateProduct');
    expect(updateProduct).toBeInTheDocument();
  });
  it('should validate the "Name" field correctly in validateForm', () => {
    const nameInput = screen.getByLabelText('Name:');
    const submitButton = screen.getByTestId('updateProduct');
    fireEvent.change(nameInput, { target: { value: '' } });
    fireEvent.click(submitButton);
    const errorElement = screen.getByText(/Name is required/i);
    expect(errorElement).toBeInTheDocument();
  });
  it('should validate the "Price" field correctly in validateForm', () => {
    const nameInput = screen.getByLabelText('Price:');
    const submitButton = screen.getByTestId('updateProduct');
    fireEvent.change(nameInput, { target: { value: '' } });
    fireEvent.click(submitButton);
    const errorElement = screen.getByText(/Price is required/i);
    expect(errorElement).toBeInTheDocument();
  });
  it('should validate the "Quantity" field correctly in validateForm', () => {
    const nameInput = screen.getByLabelText('Quantity:');
    const submitButton = screen.getByTestId('updateProduct');
    fireEvent.change(nameInput, { target: { value: '' } });
    fireEvent.click(submitButton);
    const errorElement = screen.getByText(/Quantity is required/i);
    expect(errorElement).toBeInTheDocument();
  });
  test('validateForm should validate the "Price" field correctly', () => {
    const priceInput = screen.getByLabelText('Price:');
    const submitButton = screen.getByTestId('updateProduct');
    fireEvent.change(priceInput, { target: { value: '-10' } });
    fireEvent.click(submitButton);
    let errorElement = screen.getByText(/Price must be a positive number/i);
    expect(errorElement).toBeInTheDocument();
    fireEvent.change(priceInput, { target: { value: '20' } });
    fireEvent.click(submitButton);
    errorElement = screen.queryByText(/Price must be a positive number/i);
    expect(errorElement).toBeNull();
  });
  test('validateForm should validate the "Quantity" field correctly', () => {
    const quantityInput = screen.getByLabelText('Quantity:');
    const submitButton = screen.getByTestId('updateProduct');
    fireEvent.change(quantityInput, { target: { value: '-10' } });
    fireEvent.click(submitButton);
    let errorElement = screen.getByText(/Quantity must be a positive number/i);
    expect(errorElement).toBeInTheDocument();
    fireEvent.change(quantityInput, { target: { value: '20' } });
    fireEvent.click(submitButton);
    errorElement = screen.queryByText(/Quantity must be a positive number/i);
    expect(errorElement).toBeNull();
  });
  it('should validate the "Category" field correctly in validateForm', () => {
    const nameInput = screen.getByLabelText('Category:');
    const submitButton = screen.getByTestId('updateProduct');
    fireEvent.change(nameInput, { target: { value: '' } });
    fireEvent.click(submitButton);
    const errorElement = screen.getByText(/Category is required/i);
    expect(errorElement).toBeInTheDocument();
  });
  it('should validate the "Expired Date" field correctly in validateForm', () => {
    const nameInput = screen.getByLabelText('Expired Date:');
    const submitButton = screen.getByTestId('updateProduct');
    fireEvent.change(nameInput, { target: { value: '' } });
    fireEvent.click(submitButton);
    const errorElement = screen.getByText(/Please enter a valid date/i);
    expect(errorElement).toBeInTheDocument();
  });
  test('validateForm should validate the "Expired Date" field correctly', () => {
    const exDateInput = screen.getByTestId('exDate-input');
    const submitButton = screen.getByTestId('updateProduct');
    fireEvent.change(exDateInput, { target: { value: '06/16/1991' } });
    fireEvent.click(submitButton);
    const errorElement = screen.getByText(
      /Expired date must be greater than today/i,
    );
    expect(errorElement).toBeInTheDocument();
  });
//   it('should delete an image when handleDelete is called', () => {
//     const deleteButton = screen.getByTestId('delete-image-0');
//     fireEvent.click(deleteButton);
//     expect(screen.queryByAltText('Preview 0')).not.toBeInTheDocument();
//   });
});
