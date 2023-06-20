import userReducer, {
  updateStart,
  updateSuccess,
  updateError,
  clearError,
  clearSuccessCondition,
} from '../redux/slices/recomProductSlice';

describe('userSlice', () => {
  let initialState;

  beforeEach(() => {
    initialState = {
      recomProduct: [],
      successCondition: false,
      pending: false,
      error: {
        condition: false,
        message: '',
      },
    };
  });

  it('should handle updateStart', () => {
    const nextState = userReducer(initialState, updateStart());

    expect(nextState.pending).toBe(true);
  });

  it('should handle updateSuccess', () => {
    const payload = { name: 'John Doe' };
    const nextState = userReducer(initialState, updateSuccess(payload));

    expect(nextState.successCondition).toBe(true);
    expect(nextState.pending).toBe(false);
    expect(nextState.recomProduct).toEqual(payload);
    // expect(localStorage.getItem('shoppingCart')).toEqual(
    //   JSON.stringify(payload),
    // );
  });

  it('should handle updateError', () => {
    const payload = 'An error occurred.';
    const nextState = userReducer(initialState, updateError(payload));

    expect(nextState.error.condition).toBe(true);
    expect(nextState.error.message).toEqual(payload);
    expect(nextState.pending).toBe(false);
  });

  it('should handle clearError', () => {
    initialState.error.condition = true;
    const nextState = userReducer(initialState, clearError());

    expect(nextState.error.condition).toBe(false);
  });

  it('should handle clearSuccessCondition', () => {
    initialState.successCondition = true;
    const nextState = userReducer(initialState, clearSuccessCondition());

    expect(nextState.successCondition).toBe(false);
  });
});
