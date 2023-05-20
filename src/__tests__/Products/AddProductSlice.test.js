import userReducer, {
  addProduct,
  addProductSuccess,
  addError,
  clearError,
  clearSuccessCondition,
} from '../../redux/slices/addProductSlice';

describe('addproduct', () => {
  let initialState;

  beforeEach(() => {
    initialState = {
      productInfo: null,
      successCondition: false,
      pending: false,
      error: {
        condition: false,
        message: '',
      },
    };
  });

  it('should handle addproduct', () => {
    const nextState = userReducer(initialState, addProduct());

    expect(nextState.pending).toBe(true);
  });

  it('should handle addproductSuccess', () => {
    const payload = { name: 'Doe' };
    const nextState = userReducer(initialState, addProductSuccess(payload));

    expect(nextState.successCondition).toBe(true);
    expect(nextState.pending).toBe(false);
    expect(nextState.userInfo).toEqual(payload);
  });

  it('should handle addError', () => {
    const payload = 'An error occurred.';
    const nextState = userReducer(initialState, addError(payload));

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
