import allUsersReducer, {
  updateStart,
  updateSuccess,
  updateError,
  clearError,
  clearSuccessCondition,
} from '../redux/slices/usersSlice';

describe('allUsersSlice reducer', () => {
  test('should handle updateStart', () => {
    const initialState = {
      pending: false,
    };
    const nextState = allUsersReducer(initialState, updateStart());
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

    const nextState = allUsersReducer(initialState, updateSuccess(payload));
    expect(nextState.successCondition).toBe(true);
    expect(nextState.pending).toBe(false);
    expect(nextState.userRole).toBe(payload);
    // expect(localStorageMock.setItem).toHaveBeenCalledWith(
    //   'allUsers',
    //   JSON.stringify(payload),
    // );
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
    const nextState = allUsersReducer(initialState, updateError(payload));
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
    const nextState = allUsersReducer(initialState, clearError());
    expect(nextState.error.condition).toBe(false);
  });

  test('should handle clearSuccessCondition', () => {
    const initialState = {
      successCondition: true,
    };
    const nextState = allUsersReducer(initialState, clearSuccessCondition());
    expect(nextState.successCondition).toBe(false);
  });
});
