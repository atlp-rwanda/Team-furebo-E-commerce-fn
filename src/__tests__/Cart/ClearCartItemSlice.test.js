/* eslint-disable linebreak-style */
import clearCartItemReducer, {
  clearCartStart,
  clearCartSuccess,
  clearCartFailure,
} from '../../redux/slices/Cart/ClearCartItemSlice';

describe('ClearCartItemSlice', () => {
  let initialState;

  beforeEach(() => {
    initialState = {
      clearing: false,
      error: null,
    };
  });

  it('should handle clearCartStart', () => {
    const nextState = clearCartItemReducer(initialState, clearCartStart());

    expect(nextState.clearing).toBe(true);
    expect(nextState.error).toBeNull();
  });

  it('should handle clearCartSuccess', () => {
    const nextState = clearCartItemReducer(initialState, clearCartSuccess());

    expect(nextState.clearing).toBe(false);
    expect(nextState.error).toBeNull();
  });

  it('should handle clearCartFailure', () => {
    const payload = 'An error occurred.';
    const nextState = clearCartItemReducer(
      initialState,
      clearCartFailure(payload)
    );

    expect(nextState.clearing).toBe(false);
    expect(nextState.error).toEqual(payload);
  });
});
