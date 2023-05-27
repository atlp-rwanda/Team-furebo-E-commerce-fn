import userReducer, {
  updatePassword,
  updatePasswordSuccess,
  updateError,
  clearError,
  clearSuccessCondition,
} from '../redux/slices/updatePassword';

describe('updatePassword', () => {
  let initialState;

  beforeEach(() => {
    initialState = {
      userInfo: null,
      successCondition: false,
      pending: false,
      error: {
        condition: false,
        message: '',
      },
    };
  });

  it('should handle updatePassword', () => {
    const nextState = userReducer(initialState, updatePassword());

    expect(nextState.pending).toBe(true);
  });

  it('should handle updatePasswordSuccess', () => {
    const payload = { name: 'Doe' };
    const nextState = userReducer(initialState, updatePasswordSuccess(payload));

    expect(nextState.successCondition).toBe(true);
    expect(nextState.pending).toBe(false);
    expect(nextState.userInfo).toEqual(payload);
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
