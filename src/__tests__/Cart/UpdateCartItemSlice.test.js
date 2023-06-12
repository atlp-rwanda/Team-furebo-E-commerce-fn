/* eslint-disable linebreak-style */
/* eslint-disable no-trailing-spaces */
/* eslint-disable indent */
import updateCartItemReducer, {
  updateCartItemQuantityStart,
  updateCartItemQuantitySuccess,
  updateCartItemQuantityFailure,
} from '../../redux/slices/Cart/UpdateCartItemSlice';

describe('UpdateCartItemSlice', () => {
  let initialState;

  beforeEach(() => {
    initialState = {
      cartItems: [],
      loading: false,
      error: null,
    };
  });

  it('should handle updateCartItemQuantityStart', () => {
    const nextState = updateCartItemReducer(
      initialState,
      updateCartItemQuantityStart()
    );

    expect(nextState.loading).toBe(true);
    expect(nextState.error).toBeNull();
  });

  it('should handle updateCartItemQuantitySuccess', () => {
    const payload = ['item1', 'item2'];
    const nextState = updateCartItemReducer(
      initialState,
      updateCartItemQuantitySuccess(payload)
    );

    expect(nextState.loading).toBe(false);
    expect(nextState.cartItems).toEqual(payload);
    expect(nextState.error).toBeNull();
  });

  it('should handle updateCartItemQuantityFailure', () => {
    const payload = 'An error occurred.';
    const nextState = updateCartItemReducer(
      initialState,
      updateCartItemQuantityFailure(payload)
    );

    expect(nextState.loading).toBe(false);
    expect(nextState.cartItems).toEqual([]);
    expect(nextState.error).toEqual(payload);
  });
});
