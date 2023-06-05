import disableAccountReducer, {
  updateStart,
  updateSuccess,
  updateError,
  clearError,
  clearSuccessCondition,
} from '../redux/slices/disableAccountSlice';

describe('disableAccountSlice reducer', () => {
  let initialState;

  beforeEach(() => {
    initialState = {
      successCondition: false,
      pending: false,
      error: {
        condition: false,
        message: '',
      },
    };
  });

  it('should handle updateStart', () => {
    const nextState = disableAccountReducer(initialState, updateStart());
    expect(nextState.pending).toBe(true);
  });

  it('should handle updateSuccess', () => {
    const payload = { isEnabled: 'false' };
    const nextState = disableAccountReducer(
      initialState,
      updateSuccess(payload)
    );
    expect(nextState.successCondition).toBe(true);
    expect(nextState.pending).toBe(false);
    expect(nextState.userStatus).toBe(payload);
  });

  it('should handle updateError', () => {
    const payload = 'An error occurred.';
    const nextState = disableAccountReducer(initialState, updateError(payload));
    expect(nextState.error.condition).toBe(true);
    expect(nextState.error.message).toBe(payload);
    expect(nextState.pending).toBe(false);
  });

  it('should handle clearError', () => {
    initialState.error.condition = true;
    initialState.error.message = 'An error occurred.';
    const nextState = disableAccountReducer(initialState, clearError());
    expect(nextState.error.condition).toBe(false);
    expect(nextState.error.message).toBe('');
  });

  it('should handle clearSuccessCondition', () => {
    initialState.successCondition = true;
    const nextState = disableAccountReducer(
      initialState,
      clearSuccessCondition()
    );
    expect(nextState.successCondition).toBe(false);
  });
});
