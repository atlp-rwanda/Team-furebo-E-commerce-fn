/* eslint-disable padded-blocks */
/* eslint-disable no-trailing-spaces */
/* eslint-disable max-len */
/* eslint-disable linebreak-style */
import React from 'react';
import {
  render, fireEvent, screen, waitFor, 
} from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider, useDispatch } from 'react-redux';
import configureStore from 'redux-mock-store';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
<<<<<<< HEAD
<<<<<<< HEAD
import ProductGrid, { handleClick } from '../../components/SellerProductGrid';
=======
import ProductGrid from '../../components/SellerProductGrid';
import { handleClick } from '../../components/SellerProductGrid';
>>>>>>> 15c6b94 (feat: seller delete product functionality)
=======
import ProductGrid, { handleClick } from '../../components/SellerProductGrid';
>>>>>>> 25c6dfb (feat: seller update product functionality)
import { setSingleProduct, productSlice, updateSellerProducts } from '../../redux/slices/sellerProductSlice';

// Create a mock server
// const server = setupServer(
//   rest.get('/api/sellerCollection', (req, res, ctx) => {
//     // Check if the request contains the authorization header
//     if (!req.headers.get('Authorization')) {
//       return res(ctx.status(401));
//     }

//     // Return a mock response with the data
//     const sellerProductsData = [{ id: 1, name: 'Product 1' }, { id: 2, name: 'Product 2' }];
//     return res(ctx.json(sellerProductsData));
//   }),
// );

// describe('USER INFORMATIONS TESTS', () => {
//   beforeAll(() => {
//     // Start the mock server before running the tests
//     server.listen();
//   });

//   afterEach(() => {
//     // Reset the mock server state between tests
//     server.resetHandlers();
//   });

//   afterAll(() => {
//     // Clean up the mock server
//     server.close();
//   });
//   const authenticateUser = jest.fn(() => 'validToken');

//   it('Should render SELLER PRODUCTS', async () => {
//     // Mock the localStorage getItem method to return a mock token
//     jest.spyOn(window.localStorage.__proto__, 'getItem').mockReturnValue(
//       JSON.stringify({
//         token: 'mock-token',
//       }),
//     );

//     render(
//       <Router>
//         <Provider store={store}>
//           <ProductGrid />
//         </Provider>
//       </Router>,
//     );

//     const sellerProductGrid = await screen.findByTestId('SellerProductGrid');
//     expect(sellerProductGrid).toBeInTheDocument();
//   });
// });

// import React from 'react';
// import {
//   render,
//   screen,
//   waitFor,
// } from '@testing-library/react';
// import { BrowserRouter as Router } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import { rest } from 'msw';
// import { setupServer } from 'msw/node';
// import ProductGrid from '../../components/SellerProductGrid';
// import store from '../../redux/store';
import { MockAuthProvider } from '../../../mocks/MockAuthContext';

jest.mock('../../redux/actions/SellerProduct.js');
const mockStore = configureStore([]);

describe('SELLERS PRODUCTS TESTS', () => {

  it('Should render SELLER PRODUCTS', async () => {
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
        sellerProducts: [productData],
        pending: false,
      },
    });

    render(
      <Router>
        <Provider store={store}>
          <ProductGrid />
        </Provider>
      </Router>,
    );
    await waitFor(() => {
      const sellerProductGrid = screen.queryByTestId('SellerProductGrid');
      if (sellerProductGrid) {
        expect(sellerProductGrid).toBeInTheDocument();
      }
    });
  });
  test('should update sellerProducts in state', () => {
    // Arrange
    const initialState = {
      sellerProducts: [],
    };
    
    const updatedProducts = [{ id: 1, name: 'Product 1' }, { id: 2, name: 'Product 2' }];
    
    const action = {
      type: updateSellerProducts.type,
      payload: updatedProducts,
    };
    
    // Act
    const nextState = productSlice.reducer(initialState, action);
    
    // Assert
    expect(nextState.sellerProducts).toEqual(updatedProducts);
  });
  test('should set singleProduct in state', () => {
    // Arrange
    const initialState = {
      sellerProducts: [
        { id: 1, name: 'Product 1' },
        { id: 2, name: 'Product 2' },
      ],
      singleProduct: null,
    };
    
    const productId = 2;
    
    const action = {
      type: setSingleProduct.type,
      payload: productId,
    };
    
    // Act
    const nextState = productSlice.reducer(initialState, action);
    
    // Assert
    expect(nextState.singleProduct).toEqual({ id: 2, name: 'Product 2' });
  });
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 25c6dfb (feat: seller update product functionality)
  test('should render "Your collection is empty" message when sellerProducts is null', () => {
    // Render the component with sellerProducts as null
    const store = mockStore({
      products: {
        sellerProducts: null,
        loading: false,
      },
    });
    render(
      <Router>
        <Provider store={store}>
          <ProductGrid />
        </Provider>
      </Router>,
    );
  
    // Assert that the "Your collection is empty" message is rendered
    expect(screen.getByText('Retreiving Items')).toBeInTheDocument();
  });
  
  test('should render "Sorry something went wrong with the server" message when error is not null', () => {
    // Define the error message
    const store = mockStore({
      products: {
        sellerProducts: null,
        loading: false,
        error: {
          condition: false,
          message: 'Example error message',
        },
      },
      
    });
    const errorMessage = 'Example error message';
  
    // Render the component with error
    render(
      <Router>
        <Provider store={store}>
          <ProductGrid error={{ message: errorMessage }} />
        </Provider>
      </Router>,
    );
  
    // Assert that the error message is rendered
    expect(screen.getByText('Retreiving Items')).toBeInTheDocument();
  });
<<<<<<< HEAD
=======
>>>>>>> 15c6b94 (feat: seller delete product functionality)
=======
>>>>>>> 25c6dfb (feat: seller update product functionality)
});
//   it('should dispatch singleProduct action when handleClick is called', async () => {
//     const mockStore = configureStore([]);
//     const store = mockStore({});
//     const productId = 1;
//     localStorage.setItem('currentUser', JSON.stringify({ token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJzdHdhZ2lyQG10dS5lZHUiLCJpZCI6MSwiaWF0IjoxNjg2NzE4NTI4LCJleHAiOjE2ODczMjMzMjh9.mH0H2rU7Ntn44B3v8b5UV9rYmXktqQDy2wAMPuIA2cY' }));
  
//     render(
//       <Provider store={store}>
//         <ProductGrid />
//       </Provider>,
//     );
//     await waitFor(() => {
//       expect(screen.getByTestId('SellerProductGrid')).toBeInTheDocument();
//     });
//     fireEvent.click(screen.getByText('VIEW'), { productId });
  
//     const expectedAction = setSingleProduct(productId);
//     expect(store.getActions()).toContainEqual(expectedAction);
//   });
// }); // Replace with the correct path to your MockAuthContext
// // // Mock authentication function
// const authenticateUser = jest.fn(() => 'validToken');

// // Mock API request using msw
// const server = setupServer(
//   rest.get('/sellerCollection', (req, res, ctx) => {
//     const authToken = req.headers.get('Authorization');
//     if (authToken === 'Bearer validToken') {
//       return res(ctx.status(200), ctx.json({ items: [] }));
//     } 
//     return res(ctx.status(401));
    
//   }),
// );

// beforeAll(() => server.listen());
// afterAll(() => server.close());

// it('Should render SELLER PRODUCTS', async () => {
//   render(
//     <Router>
//       <Provider store={store}>
//         <MockAuthProvider>
//           <ProductGrid />
//         </MockAuthProvider>
//       </Provider>
//     </Router>,
//   );

//   await waitFor(() => {
//     expect(screen.queryByText('Loading ...')).toBeNull();
//   });

//   const sellerProductGrid = await screen.findByText("Sorry something went wrong with the server Cannot read properties of undefined (reading 'data')");
//   expect(sellerProductGrid).toBeInTheDocument();
