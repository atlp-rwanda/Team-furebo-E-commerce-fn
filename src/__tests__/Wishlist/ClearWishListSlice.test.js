import clearWishlistReducer, {
  clearWishlistStart,
  clearWishlistSuccess,
  clearWishlistFailure,
} from '../../redux/slices/Wishlist/ClearWishListSlice';

describe('clearWishlistSlice', () => {
  let initialState;

  beforeEach(() => {
    initialState = {
      clearing: false,
      error: null,
    };
  });

  it('should handle clearWishlistStart', () => {
    const nextState = clearWishlistReducer(initialState, clearWishlistStart());

    expect(nextState.clearing).toBe(true);
    expect(nextState.error).toBeNull();
  });

  it('should handle clearWishlistSuccess', () => {
    const nextState = clearWishlistReducer(
      initialState,
      clearWishlistSuccess()
    );

    expect(nextState.clearing).toBe(false);
    expect(nextState.error).toBeNull();
  });

  it('should handle clearWishlistFailure', () => {
    const payload = 'An error occurred.';
    const nextState = clearWishlistReducer(
      initialState,
      clearWishlistFailure(payload)
    );

    expect(nextState.clearing).toBe(false);
    expect(nextState.error).toEqual(payload);
  });
});
