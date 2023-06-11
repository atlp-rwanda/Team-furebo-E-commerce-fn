import allProductsReducer, {
  updateStart,
  updateSuccess,
  updateError,
  clearError,
  clearSuccessCondition,
} from '../redux/slices/fetchProductSlice';

describe('allProductsSlice', () => {
  it('should handle updateStart', () => {
    const initialState = {
      pending: false,
    };
    const nextState = allProductsReducer(initialState, updateStart());
    expect(nextState.pending).toBe(true);
  });

  it('should handle updateSuccess', () => {
    const initialState = {
      successCondition: false,
      pending: true,
      productsInfo: [],
    };
    const payload = [{ id: 1, name: 'Product 1' }];
    const nextState = allProductsReducer(initialState, updateSuccess(payload));
    expect(nextState.successCondition).toBe(true);
    expect(nextState.pending).toBe(false);
    expect(nextState.productsInfo).toEqual(payload);
  });

  it('should handle updateError', () => {
    const initialState = {
      error: {
        condition: false,
        message: '',
      },
      pending: true,
    };
    const payload = 'Something went wrong.';
    const nextState = allProductsReducer(initialState, updateError(payload));
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
    const nextState = allProductsReducer(initialState, clearError());
    expect(nextState.error.condition).toBe(false);
  });

  it('should handle clearSuccessCondition', () => {
    const initialState = {
      successCondition: true,
    };
    const nextState = allProductsReducer(initialState, clearSuccessCondition());
    expect(nextState.successCondition).toBe(false);
  });
});
