/* eslint-disable no-trailing-spaces */
/* eslint-disable linebreak-style */
/* eslint-disable indent */
import updateUserEssentialInfoReducer, {
    updateUserEssentialInfoStart,
    updateUserEssentialInfoSuccess,
    updateUserEssentialInfoFailure,
  } from '../../redux/slices/UserProfile/UpdateUserEssentialInfoSlice';
  
  describe('updateUserEssentialInfoSlice', () => {
    it('should handle updateUserEssentialInfoStart', () => {
      const initialState = {
        updateEssentialInfoItem: [],
        loading: false,
        error: null,
      };
      const nextState = updateUserEssentialInfoReducer(initialState, updateUserEssentialInfoStart());
      expect(nextState.loading).toBe(true);
      expect(nextState.error).toBe(null);
    });
  
    it('should handle updateUserEssentialInfoSuccess', () => {
      const initialState = {
        updateEssentialInfoItem: [],
        loading: true,
        error: null,
      };
      const payload = { name: 'John', age: 30 };
      const nextState = updateUserEssentialInfoReducer(
        initialState,
        updateUserEssentialInfoSuccess(payload)
      );
      expect(nextState.loading).toBe(false);
      expect(nextState.updateEssentialInfoItem).toEqual(payload);
    });
  
    it('should handle updateUserEssentialInfoFailure', () => {
      const initialState = {
        updateEssentialInfoItem: [],
        loading: true,
        error: null,
      };
      const payload = 'Error message';
      const nextState = updateUserEssentialInfoReducer(
        initialState,
        updateUserEssentialInfoFailure(payload)
      );
      expect(nextState.loading).toBe(false);
      expect(nextState.error).toBe(payload);
    });
  });
  