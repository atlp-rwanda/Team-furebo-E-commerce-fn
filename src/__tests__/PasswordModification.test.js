// import React from 'react';
// import { render, screen, fireEvent } from '@testing-library/react';
// import { BrowserRouter as Router } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import configureStore from 'redux-mock-store';
// import store from '../redux/store';
// import PasswordModification from '../components/PasswordModification';

// const mockStore = configureStore([]);

// describe('PasswordModification', () => {
//   let store;

//   beforeEach(() => {
//     store = mockStore({
//       updatePassword: {
//         userInfo: null,
//         successCondition: false,
//         pending: false,
//         error: {
//           condition: false,
//           message: '',
//         },
//       },
//     });
//   });

//   it('should render PasswordModification', () => {
//     render(
//       <Router>
//         <Provider store={store}>
//           <PasswordModification />
//         </Provider>
//       </Router>
//     );
//     const updatePassword = screen.getByTestId('PasswordModification');
//     expect(updatePassword).toBeInTheDocument();
//   });

//   test('renders PasswordModification component', () => {
//     render(
//       <Provider store={store}>
//         <PasswordModification />
//       </Provider>
//     );
//     const passwordModification = screen.getByTestId('PasswordModification');
//     expect(passwordModification).toBeInTheDocument();
//   });

//   test('updates input fields and submits form', () => {
//     render(
//       <Provider store={store}>
//         <PasswordModification />
//       </Provider>
//     );
//     const oldPasswordInput = screen.getByPlaceholderText('Old Password');
//     fireEvent.change(oldPasswordInput, { target: { value: 'oldPassword123' } });

//     const newPasswordInput = screen.getByPlaceholderText('New Password');
//     fireEvent.change(newPasswordInput, { target: { value: 'newPassword123' } });
//     expect(oldPasswordInput.value).toBe('oldPassword123');
//     expect(newPasswordInput.value).toBe('newPassword123');
//     const submitButton = screen.getByText('Change Password');
//     fireEvent.click(submitButton);
//     expect(store.getActions()).toHaveLength(1);
//   });
// });
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import store from '../redux/store';
import PasswordModification from '../components/PasswordModification';

const mockStore = configureStore([]);

describe('PasswordModification', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      updatePassword: {
        userInfo: null,
        successCondition: false,
        pending: false,
        error: {
          condition: false,
          message: '',
        },
      },
    });
  });

  it('should render PasswordModification', () => {
    render(
      <Router>
        <Provider store={store}>
          <PasswordModification />
        </Provider>
      </Router>
    );
    const updatePassword = screen.getByTestId('PasswordModification');
    expect(updatePassword).toBeInTheDocument();
  });

  test('renders PasswordModification component', () => {
    render(
      <Router>
        <Provider store={store}>
          <PasswordModification />
        </Provider>
      </Router>
    );
    const passwordModification = screen.getByTestId('PasswordModification');
    expect(passwordModification).toBeInTheDocument();
  });

  test('updates input fields and submits form', () => {
    render(
      <Router>
        <Provider store={store}>
          <PasswordModification />
        </Provider>
      </Router>
    );
    const oldPasswordInput = screen.getByPlaceholderText('Old Password');
    fireEvent.change(oldPasswordInput, { target: { value: 'oldPassword123' } });

    const newPasswordInput = screen.getByPlaceholderText('New Password');
    fireEvent.change(newPasswordInput, { target: { value: 'newPassword123' } });
    expect(oldPasswordInput.value).toBe('oldPassword123');
    expect(newPasswordInput.value).toBe('newPassword123');
    const submitButton = screen.getByText('Change Password');
    fireEvent.click(submitButton);
    expect(store.getActions()).toHaveLength(1);
  });
});
