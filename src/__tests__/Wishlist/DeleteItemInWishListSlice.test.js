import deleteItemInWishlistReducer, {
  deleteItemInWishlistStart,
  deleteItemInWishlistSuccess,
  deleteItemInWishlistFailure,
} from '../../redux/slices/Wishlist/DeleteItemInWishListSlice';

describe('deleteItemInWishlistSlice', () => {
  let initialState;

  beforeEach(() => {
    initialState = {
      deleting: false,
      error: null,
    };
  });

  it('should handle deleteItemInWishlistStart', () => {
    const nextState = deleteItemInWishlistReducer(
      initialState,
      deleteItemInWishlistStart()
    );

    expect(nextState.deleting).toBe(true);
    expect(nextState.error).toBeNull();
  });

  it('should handle deleteItemInWishlistSuccess', () => {
    const nextState = deleteItemInWishlistReducer(
      initialState,
      deleteItemInWishlistSuccess()
    );

    expect(nextState.deleting).toBe(false);
    expect(nextState.error).toBeNull();
  });

  it('should handle deleteItemInWishlistFailure', () => {
    const payload = 'An error occurred.';
    const nextState = deleteItemInWishlistReducer(
      initialState,
      deleteItemInWishlistFailure(payload)
    );

    expect(nextState.deleting).toBe(false);
    expect(nextState.error).toEqual(payload);
  });
});
