import updateUserBasicInfoReducer, {
    updateUserBasicInfoStart,
    updateUserBasicInfoSuccess,
    updateUserBasicInfoFailure,
  } from '../../redux/slices/UserProfile/UpdateUserBasicInfoSlice';
  
  describe('updateUserBasicInfoSlice', () => {
    it('should handle updateUserBasicInfoStart', () => {
      const initialState = {
        updateBasicInfoItem: [],
        loading: false,
        error: null,
      };
      const nextState = updateUserBasicInfoReducer(initialState, updateUserBasicInfoStart());
      expect(nextState.loading).toBe(true);
      expect(nextState.error).toBe(null);
    });
  
    it('should handle updateUserBasicInfoSuccess', () => {
      const initialState = {
        updateBasicInfoItem: [],
        loading: true,
        error: null,
      };
      const payload = { name: 'John', age: 30 };
      const nextState = updateUserBasicInfoReducer(
        initialState,
        updateUserBasicInfoSuccess(payload)
      );
      expect(nextState.loading).toBe(false);
      expect(nextState.updateBasicInfoItem).toEqual(payload);
    });
  
    it('should handle updateUserBasicInfoFailure', () => {
      const initialState = {
        updateBasicInfoItem: [],
        loading: true,
        error: null,
      };
      const payload = 'Error message';
      const nextState = updateUserBasicInfoReducer(
        initialState,
        updateUserBasicInfoFailure(payload)
      );
      expect(nextState.loading).toBe(false);
      expect(nextState.error).toBe(payload);
    });
  });
  