import checkoutReducer, {
  updateStart,
  updateSuccess,
  updateError,
  clearError,
  clearSuccessCondition,
} from '../redux/slices/checkoutSlice';

describe('checkoutSlice', () => {
  it('should handle updateStart', () => {
    const initialState = {
      pending: false,
    };
    const nextState = checkoutReducer(initialState, updateStart());
    expect(nextState.pending).toBe(true);
  });

  it('should handle updateSuccess', () => {
    const initialState = {
      successCondition: false,
      pending: true,
      productsInfo: [],
    };
    const payload = [{ id: 1, name: 'Product 1' }];
    const nextState = checkoutReducer(initialState, updateSuccess(payload));
    expect(nextState.successCondition).toBe(true);
    expect(nextState.pending).toBe(false);
    expect(nextState.checkoutInfo).toEqual(payload);
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
    const nextState = checkoutReducer(initialState, updateError(payload));
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
    const nextState = checkoutReducer(initialState, clearError());
    expect(nextState.error.condition).toBe(false);
  });

  it('should handle clearSuccessCondition', () => {
    const initialState = {
      successCondition: true,
    };
    const nextState = checkoutReducer(initialState, clearSuccessCondition());
    expect(nextState.successCondition).toBe(false);
  });
});
