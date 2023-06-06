import userReducer, {
  requestPasswordReset,
  requestPasswordResetSuccess,
  requestPasswordResetFailure,
  clearError,
  clearSuccessCondition,
} from '../redux/slices/resetPasswordSlice';

describe('resetPasswordSlice', () => {
  let initialState;

  beforeEach(() => {
    initialState = {
      email: '',
      userInfo: null,
      successCondition: false,
      pending: false,
      error: {
        condition: false,
        message: '',
      },
    };
  });

  it('should have the correct initial state', () => {
    expect(userReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle resetPassword', () => {
    const nextState = userReducer(initialState, requestPasswordReset());

    expect(nextState.pending).toBe(true);
  });

  it('should handle requestPasswordResetSuccess', () => {
    const payload = { email: 'bstwagir@mtu.edu' };
    const nextState = userReducer(initialState, requestPasswordResetSuccess(payload));

    expect(nextState.successCondition).toBe(true);
    expect(nextState.pending).toBe(false);
    expect(nextState.userInfo).toEqual(payload);
  });

  it('should handle requestPasswordResetFailure with error message', () => {
    const payload = 'An error occurred.';
    const nextState = userReducer(initialState, requestPasswordResetFailure(payload));

    expect(nextState.error.condition).toBe(true);
    expect(nextState.error.message).toEqual(payload);
    expect(nextState.pending).toBe(false);
  });

  it('should handle requestPasswordResetFailure with empty error message', () => {
    const payload = {};
    const nextState = userReducer(initialState, requestPasswordResetFailure(payload));

    expect(nextState.error.condition).toBe(true);
    expect(nextState.error.message).toEqual(payload);
    expect(nextState.pending).toBe(false);
  });

  it('should handle clearError', () => {
    initialState.error.condition = true;
    const nextState = userReducer(initialState, clearError());

    expect(nextState.error.condition).toBe(false);
    expect(nextState.error.message).toEqual('');
  });

  it('should handle clearSuccessCondition', () => {
    initialState.successCondition = true;
    const nextState = userReducer(initialState, clearSuccessCondition());

    expect(nextState.successCondition).toBe(false);
  });
});
