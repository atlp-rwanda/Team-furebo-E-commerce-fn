import viewCartItemsReducer, {
  fetchCartItemsStart,
  fetchCartItemsSuccess,
  fetchCartItemsFailure,
} from '../../redux/slices/Cart/ViewCartItemsSlice';

describe('viewCartItemsSlice', () => {
  let initialState;

  beforeEach(() => {
    initialState = {
      cartItems: [],
      loading: false,
      error: null,
    };
  });

  it('should handle fetchCartItemsStart', () => {
    const nextState = viewCartItemsReducer(initialState, fetchCartItemsStart());

    expect(nextState.loading).toBe(true);
    expect(nextState.error).toBeNull();
  });

  it('should handle fetchCartItemsSuccess', () => {
    const payload = [{ id: 1, name: 'Item 1' }];
    const nextState = viewCartItemsReducer(
      initialState,
      fetchCartItemsSuccess(payload)
    );

    expect(nextState.loading).toBe(false);
    expect(nextState.cartItems).toEqual(payload);
    expect(nextState.error).toBeNull();
  });

  it('should handle fetchCartItemsFailure', () => {
    const payload = 'An error occurred.';
    const nextState = viewCartItemsReducer(
      initialState,
      fetchCartItemsFailure(payload)
    );

    expect(nextState.loading).toBe(false);
    expect(nextState.cartItems).toEqual([]);
    expect(nextState.error).toEqual(payload);
  });
});
