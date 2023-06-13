import viewWishlistReducer, {
  fetchWishlistStart,
  fetchWishlistSuccess,
  fetchWishlistFailure,
} from '../../redux/slices/Wishlist/ViewWishlistSlice';

describe('viewWishlistSlice', () => {
  let initialState;

  beforeEach(() => {
    initialState = {
      wishlistItems: [],
      loading: false,
      error: null,
    };
  });

  it('should handle fetchWishlistStart', () => {
    const nextState = viewWishlistReducer(initialState, fetchWishlistStart());

    expect(nextState.loading).toBe(true);
    expect(nextState.error).toBeNull();
  });

  it('should handle fetchWishlistSuccess', () => {
    const payload = [{ id: 1, name: 'Item 1' }];
    const nextState = viewWishlistReducer(
      initialState,
      fetchWishlistSuccess(payload)
    );

    expect(nextState.loading).toBe(false);
    expect(nextState.wishlistItems).toEqual(payload);
    expect(nextState.error).toBeNull();
  });

  it('should handle fetchWishlistFailure', () => {
    const payload = 'An error occurred.';
    const nextState = viewWishlistReducer(
      initialState,
      fetchWishlistFailure(payload)
    );

    expect(nextState.loading).toBe(false);
    expect(nextState.wishlistItems).toEqual([]);
    expect(nextState.error).toEqual(payload);
  });
});
