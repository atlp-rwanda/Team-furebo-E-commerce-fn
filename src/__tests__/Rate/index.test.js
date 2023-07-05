// import React from 'react';
// import { render, fireEvent } from '@testing-library/react';
// import { Provider } from 'react-redux';
// import configureStore from 'redux-mock-store';
// import Rate from '../../components/Rate/index';

// const mockStore = configureStore([]);

// describe('Rate', () => {
//   let store;
//   beforeEach(() => {
//     store = mockStore({
//       user: {
//         fullName: 'John Doe', // Add the user object to the Redux store state
//       },
//     });
//   });

//   test('renders the component', () => {
//     const { getByText } = render(
//       <Provider store={store}>
//         <Rate productId={1} />
//       </Provider>
//     );
//     const rateReview = getByText('Review');
//     const addReviewButton = getByText('Add Review');
//     expect(rateReview).toBeInTheDocument();
//     expect(addReviewButton).toBeInTheDocument();
//   });

//   test('changes the rating when a star is clicked', () => {
//     const { getAllByRole } = render(
//       <Provider store={store}>
//         <Rate productId={1} />
//       </Provider>
//     );
//     const starLabels = getAllByRole('radio');

//     fireEvent.click(starLabels[2]);

//     expect(starLabels[2].checked).toBeTruthy();
//   });

//   test('submits the form when "Add Review" button is clicked', () => {
//     const dispatchMock = jest.fn();
//     store.dispatch = dispatchMock;
//     const { getByText } = render(
//       <Provider store={store}>
//         <Rate productId={1} />
//       </Provider>
//     );
//     const addReviewButton = getByText('Add Review');

//     fireEvent.click(addReviewButton);

//     expect(dispatchMock).toHaveBeenCalledTimes(1);
//   });
// });
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Rate from '../../components/Rate/index';

const mockStore = configureStore([]);

describe('Rate', () => {
  let store;
  beforeEach(() => {
    store = mockStore({
      user: {
        fullName: 'John Doe',
      },
      rateProduct: {
        pending: false,
      },
    });
  });

  test('renders the component', () => {
    const { getByText } = render(
      <Provider store={store}>
        <Rate productId={1} />
      </Provider>
    );
    const rateReview = getByText('Review');
    const addReviewButton = getByText('Add Review');
    expect(rateReview).toBeInTheDocument();
    expect(addReviewButton).toBeInTheDocument();
  });

  test('changes the rating when a star is clicked', () => {
    const { getAllByRole } = render(
      <Provider store={store}>
        <Rate productId={1} />
      </Provider>
    );
    const starLabels = getAllByRole('radio');

    fireEvent.click(starLabels[2]);

    expect(starLabels[2].checked).toBeTruthy();
  });

  test('submits the form when "Add Review" button is clicked', () => {
    const dispatchMock = jest.fn();
    store.dispatch = dispatchMock;
    const { getByText } = render(
      <Provider store={store}>
        <Rate productId={1} />
      </Provider>
    );
    const addReviewButton = getByText('Add Review');

    fireEvent.click(addReviewButton);

    expect(dispatchMock).toHaveBeenCalledTimes(1);
  });
});
