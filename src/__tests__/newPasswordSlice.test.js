import userReducer, {
  newPasswordReset,
  newPasswordResetSuccess,
  newPasswordResetFailure,
  clearError,
  clearSuccessCondition,
} from '../redux/slices/newPasswordSlice';

describe('newPasswordSlice', () => {
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

  it('should handle resetPassword', () => {
    const nextState = userReducer(initialState, newPasswordReset());

    expect(nextState.pending).toBe(true);
  });

  it('should handle newPasswordResetSuccess', () => {
    const payload = { email: 'bstwagir@mtu.edu' };
    const nextState = userReducer(
      initialState,
      newPasswordResetSuccess(payload)
    );

    expect(nextState.successCondition).toBe(true);
    expect(nextState.pending).toBe(false);
    expect(nextState.userInfo).toEqual(payload);
  });

  it('should handle newPasswordResetFailure', () => {
    const payload = 'An error occurred.';
    const nextState = userReducer(
      initialState,
      newPasswordResetFailure(payload)
    );

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
