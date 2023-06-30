import productReducer, {
  setSingleProduct, deleteStart, deleteSuccess, deleteError,
  updateSingleProduct, setUpdateProduct, updateStart, updateSuccess, updateError,
} from '../../redux/slices/sellerProductSlice';

describe('sellerProductSlice', () => {
  let initialState;

  beforeEach(() => {
    initialState = {
      userInfo: null,
      successCondition: false,
      sellerProducts: [],
      singleProduct: null,
      updateProduct: null,
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

  it('should handle deleteFailure', () => {
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
      error: {
        condition: false,
        message: '',
      },
    };
    const action = setSingleProduct(5);

    // Act
    const newState = productReducer(initialState, action);

    // Assert
    expect(newState.error).toEqual({
      condition: true,
      message: 'Product with ID 5 not found.',
    });
  });

  test('udpdateSingleProduct should return a singleProduct value', () => {
    // Arrange
    initialState = {
      sellerProducts: [
        { id: 1, name: 'Product 1' },
        { id: 2, name: 'Product 2' },
      ],
      singleProduct: null,
      error: null,
    };
    const action = updateSingleProduct({ id: 2, name: 'Updated Product' });

    // Act
    const newState = productReducer(initialState, action);

    // Assert
    expect(newState.singleProduct).toEqual({ id: 2, name: 'Updated Product' });
    expect(newState.sellerProducts).toEqual(initialState.sellerProducts);
    expect(newState.error).toEqual(initialState.error);
  });
  test('setUpdateProduct should set the updateProduct field in the state', () => {
    // Arrange
    initialState = {
      sellerProducts: [],
      singleProduct: null,
      updateProduct: null,
      error: null,
    };
    const action = setUpdateProduct({ id: 2, name: 'Update Product' });

    // Act
    const newState = productReducer(initialState, action);

    // Assert
    expect(newState.updateProduct).toEqual({ id: 2, name: 'Update Product' });
    expect(newState.sellerProducts).toEqual(initialState.sellerProducts);
    expect(newState.singleProduct).toEqual(initialState.singleProduct);
    expect(newState.error).toEqual(initialState.error);
  });
  it('should handle updateStart', () => {
    const nextState = productReducer(initialState, updateStart());

    expect(nextState.pending).toBe(true);
  });

  it('should handle updateSuccess', () => {
    const payload = { id: 1, name: 'Updated User' };
    const nextState = productReducer(
      initialState,
      updateSuccess(payload),
    );

    expect(nextState.successCondition).toBe(true);
    expect(nextState.pending).toBe(false);
    expect(nextState.userInfo).toEqual(payload);
  });

  it('should handle updateError', () => {
    const payload = 'An error occurred.';
    const nextState = productReducer(
      initialState,
      updateError(payload),
    );

    expect(nextState.error.condition).toBe(true);
    expect(nextState.error.message).toEqual(payload);
    expect(nextState.pending).toBe(false);
  });
  test('should set error in state when an error occurs', () => {
    // Arrange
    const initialState = {
      updateProduct: null,
      error: {
        condition: false,
        message: '',
      },
    };

    const errorMessage = '';

    const action = {
      type: setUpdateProduct.type,
      payload: new Error(errorMessage),
    };

    // Act
    const nextState = productReducer(initialState, action);

    // Assert
    expect(nextState.updateProduct).toEqual(new Error(errorMessage));
    expect(nextState.error).toEqual({ condition: false, message: errorMessage });
  });
});
