import productReducer, {
    setSingleProduct, deleteStart, deleteSuccess, deleteError,
} from '../../redux/slices/sellerProductSlice';

describe('sellerProductSlice', () => {
  let initialState;

  beforeEach(() => {
    initialState = {
      userInfo: null,
      sellerProducts: [],
      singleProduct: null,
      successCondition: false,
      pending: false,
      error: {
        condition: false,
        message: '',
      },
    };
  });

  it('should handle deleteProduct', () => {
    const nextState = productReducer(initialState, deleteStart());

    expect(nextState.pending).toBe(true);
  });

  it('should handle deleteSuccess', () => {
    const payload = { id: 1 };
    const nextState = productReducer(
      initialState,
      deleteSuccess(payload),
    );

    expect(nextState.successCondition).toBe(true);
    expect(nextState.pending).toBe(false);
    expect(nextState.userInfo).toEqual(payload);
  });

  it('should handle newPasswordResetFailure', () => {
    const payload = 'An error occurred.';
    const nextState = productReducer(
      initialState,
      deleteError(payload),
    );

    expect(nextState.error.condition).toBe(true);
    expect(nextState.error.message).toEqual(payload);
    expect(nextState.pending).toBe(false);
  });
  test('setSingleProduct should update singleProduct in the state', () => {
    // Arrange
    initialState = {
      sellerProducts: [
        { id: 1, name: 'Product 1' },
        { id: 2, name: 'Product 2' },
      ],
      singleProduct: null,
      error: null,
    };
    const action = setSingleProduct(2);

    // Act
    const newState = productReducer(initialState, action);

    // Assert
    expect(newState.singleProduct).toEqual({ id: 2, name: 'Product 2' });
  });

  test('setSingleProduct should handle error and update error field', () => {
    // Arrange
    initialState = {
      sellerProducts: [
        { id: 1, name: 'Product 1' },
        { id: 2, name: 'Product 2' },
      ],
      singleProduct: null,
      error: null,
    };
    const action = setSingleProduct(3);

    // Act
    const newState = productReducer(initialState, action);

    // Assert
    expect(newState.error).toBe(null);
  });
});
