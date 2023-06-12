/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
/* eslint-disable no-trailing-spaces */
import deleteItemInCartReducer, {
  deleteItemInCartStart,
  deleteItemInCartSuccess,
  deleteItemInCartFailure,
} from '../../redux/slices/Cart/DeleteCartItemSlice';

describe('DeleteCartItemSlice', () => {
  let initialState;

  beforeEach(() => {
    initialState = {
      deleting: false,
      error: null,
    };
  });

  it('should handle deleteItemInCartStart', () => {
    const nextState = deleteItemInCartReducer(
      initialState,
      deleteItemInCartStart()
    );

    expect(nextState.deleting).toBe(true);
    expect(nextState.error).toBeNull();
  });

  it('should handle deleteItemInCartSuccess', () => {
    const nextState = deleteItemInCartReducer(
      initialState,
      deleteItemInCartSuccess()
    );

    expect(nextState.deleting).toBe(false);
    expect(nextState.error).toBeNull();
  });

  it('should handle deleteItemInCartFailure', () => {
    const payload = 'An error occurred.';
    const nextState = deleteItemInCartReducer(
      initialState,
      deleteItemInCartFailure(payload)
    );

    expect(nextState.deleting).toBe(false);
    expect(nextState.error).toEqual(payload);
  });
});
