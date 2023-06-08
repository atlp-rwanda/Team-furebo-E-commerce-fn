import userRoleReducer, {
  updateStart,
  updateSuccess,
  updateError,
  clearError,
  clearSuccessCondition,
} from '../redux/slices/userRolesSlice';

describe('userRoleSlice reducer', () => {
  test('should handle updateStart', () => {
    const initialState = {
      pending: false,
    };
    const nextState = userRoleReducer(initialState, updateStart());
    expect(nextState.pending).toBe(true);
  });

  test('should handle updateSuccess', () => {
    const initialState = {
      successCondition: false,
      pending: true,
      userRole: null,
    };
    const payload = { role: 'admin' };

    // Mock localStorage.setItem
    const localStorageMock = {
      setItem: jest.fn(),
    };
    Object.defineProperty(window, 'localStorage', {
      value: localStorageMock,
    });

    const nextState = userRoleReducer(initialState, updateSuccess(payload));
    expect(nextState.successCondition).toBe(true);
    expect(nextState.pending).toBe(false);
    expect(nextState.userRole).toBe(payload);
    expect(localStorageMock.setItem).toHaveBeenCalledWith(
      'currentUserRole',
      JSON.stringify(payload)
    );
  });

  test('should handle updateError', () => {
    const initialState = {
      error: {
        condition: false,
        message: '',
      },
      pending: true,
    };
    const payload = 'Something went wrong';
    const nextState = userRoleReducer(initialState, updateError(payload));
    expect(nextState.error.condition).toBe(true);
    expect(nextState.error.message).toBe(payload);
    expect(nextState.pending).toBe(false);
  });

  test('should handle clearError', () => {
    const initialState = {
      error: {
        condition: true,
        message: 'Something went wrong',
      },
    };
    const nextState = userRoleReducer(initialState, clearError());
    expect(nextState.error.condition).toBe(false);
  });

  test('should handle clearSuccessCondition', () => {
    const initialState = {
      successCondition: true,
    };
    const nextState = userRoleReducer(initialState, clearSuccessCondition());
    expect(nextState.successCondition).toBe(false);
  });
});
