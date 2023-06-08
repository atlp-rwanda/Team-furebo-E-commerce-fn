import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import AddProduct from '../../components/ProductDetails/AddProduct';

const mockStore = configureStore([]);
global.URL.createObjectURL = jest.fn();

describe('AddProduct', () => {
  test('validateForm should validate the form fields correctly', () => {
    const store = mockStore({});
    render(
      <Provider store={store}>
        <AddProduct />
      </Provider>,
    );
    const nameInput = screen.getByLabelText('Name:');
    const imagesInput = screen.getByLabelText('Images:');
    const priceInput = screen.getByLabelText('Price:');
    const quantityInput = screen.getByLabelText('Quantity:');
    const categoryInput = screen.getByLabelText('Category:');
    const expiredDateInput = screen.getByLabelText('Expired Date:');
    const submitButton = screen.getByTestId('addProduct');
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
  it('Should render AddProduct', () => {
    const store = mockStore({});
    render(
      <Router>
        <Provider store={store}>
          <AddProduct />
        </Provider>
      </Router>,
    );
    const addProduct = screen.getByTestId('AddProduct');
    expect(addProduct).toBeInTheDocument();
  });
  it('should validate the "Name" field correctly in validateForm', () => {
    const store = mockStore({});
    render(
      <Router>
        <Provider store={store}>
          <AddProduct />
        </Provider>
      </Router>,
    );
    const nameInput = screen.getByLabelText('Name:');
    const submitButton = screen.getByTestId('addProduct');
    fireEvent.change(nameInput, { target: { value: '' } });
    fireEvent.click(submitButton);
    const errorElement = screen.getByText(/Name is required/i);
    expect(errorElement).toBeInTheDocument();
  });
  it('should validate the "Quantity" field correctly in validateForm', () => {
    const store = mockStore({});
    render(
      <Router>
        <Provider store={store}>
          <AddProduct />
        </Provider>
      </Router>,
    );
    const nameInput = screen.getByLabelText('Quantity:');
    const submitButton = screen.getByTestId('addProduct');
    fireEvent.change(nameInput, { target: { value: '' } });
    fireEvent.click(submitButton);
    const errorElement = screen.getByText(/Quantity is required/i);
    expect(errorElement).toBeInTheDocument();
  });
  test('validateForm should validate the "Price" field correctly', () => {
    const store = mockStore({});
    render(
      <Router>
        <Provider store={store}>
          <AddProduct />
        </Provider>
      </Router>,
    );
    const priceInput = screen.getByLabelText('Price:');
    const submitButton = screen.getByTestId('addProduct');
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
    const store = mockStore({});
    render(
      <Router>
        <Provider store={store}>
          <AddProduct />
        </Provider>
      </Router>,
    );
    const quantityInput = screen.getByLabelText('Quantity:');
    const submitButton = screen.getByTestId('addProduct');
    fireEvent.change(quantityInput, { target: { value: '-10' } });
    fireEvent.click(submitButton);
    let errorElement = screen.getByText(/Quantity must be a positive number/i);
    expect(errorElement).toBeInTheDocument();
    fireEvent.change(quantityInput, { target: { value: '20' } });
    fireEvent.click(submitButton);
    errorElement = screen.queryByText(/Quantity must be a positive number/i);
    expect(errorElement).toBeNull();
  });
  test('validateForm should validate the "Expired Date" field correctly', () => {
    const store = mockStore({});
    render(
      <Router>
        <Provider store={store}>
          <AddProduct />
        </Provider>
      </Router>,
    );
    const exDateInput = screen.getByTestId('exDate-input');
    const submitButton = screen.getByTestId('addProduct');
    fireEvent.change(exDateInput, { target: { value: '2022-01-01' } });
    fireEvent.click(submitButton);
    const errorElement = screen.getByText(
      /Expired date must be greater than today/i,
    );
    expect(errorElement).toBeInTheDocument();
  });
});
