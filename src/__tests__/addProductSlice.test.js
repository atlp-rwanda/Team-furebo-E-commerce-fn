import addProductReducer, {
  addProduct,
  addProductSuccess,
  addError,
  clearError,
  clearSuccessCondition,
} from '../redux/slices/addProductSlice';

describe('addProductSlice', () => {
  it('should handle addProduct', () => {
    const initialState = {
      pending: false,
    };
    const nextState = addProductReducer(initialState, addProduct());
    expect(nextState.pending).toBe(true);
  });

  it('should handle addProductSuccess', () => {
    const initialState = {
      successCondition: false,
      pending: true,
      productInfo: null,
    };
    const payload = { id: 1, name: 'Product 1' };
    const nextState = addProductReducer(
      initialState,
      addProductSuccess(payload)
    );
    expect(nextState.successCondition).toBe(true);
    expect(nextState.pending).toBe(false);
    expect(nextState.productInfo).toEqual(payload);
  });

  it('should handle addError', () => {
    const initialState = {
      error: {
        condition: false,
        message: '',
      },
      pending: true,
    };
    const payload = 'Something went wrong.';
    const nextState = addProductReducer(initialState, addError(payload));
    expect(nextState.error.condition).toBe(true);
    expect(nextState.error.message).toEqual(payload);
    expect(nextState.pending).toBe(false);
  });

  it('should handle clearError', () => {
    const initialState = {
      error: {
        condition: true,
        message: 'An error occurred.',
      },
    };
    const nextState = addProductReducer(initialState, clearError());
    expect(nextState.error.condition).toBe(false);
  });

  it('should handle clearSuccessCondition', () => {
    const initialState = {
      successCondition: true,
    };
    const nextState = addProductReducer(initialState, clearSuccessCondition());
    expect(nextState.successCondition).toBe(false);
  });
});
