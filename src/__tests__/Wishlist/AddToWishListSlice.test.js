import addToWishlistReducer, {
  addToWishlist,
  removeFromWishlist,
} from '../../redux/slices/Wishlist/AddToWishListSlice';

describe('addToWishlistSlice', () => {
  let initialState;

  beforeEach(() => {
    initialState = [];
  });

  it('should handle addToWishlist', () => {
    const newItem = { id: 1, name: 'Item 1' };
    const nextState = addToWishlistReducer(
      initialState,
      addToWishlist({ data: newItem })
    );

    expect(nextState).toEqual([newItem]);
  });

  it('should handle removeFromWishlist', () => {
    const initialState = [
      { id: 1, name: 'Item 1' },
      { id: 2, name: 'Item 2' },
      { id: 3, name: 'Item 3' },
    ];
    const itemId = 2;
    const nextState = addToWishlistReducer(
      initialState,
      removeFromWishlist({ itemId })
    );

    expect(nextState).toEqual([
      { id: 1, name: 'Item 1' },
      { id: 3, name: 'Item 3' },
    ]);
  });
});
