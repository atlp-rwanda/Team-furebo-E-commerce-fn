import FetchUserBasicInfoReducer, {
    fetchUserBasicInfoStart,
    fetchUserBasicInfoSuccess,
    fetchUserBasicInfoFailure,
  } from '../../redux/slices/UserProfile/FetchUserBasicInfoSlice';
  
  describe('FetchUserBasicInfoSlice', () => {
    it('should handle fetchUserBasicInfoStart', () => {
      const initialState = {
        userBasicInfo: {},
        loading: false,
        error: null,
      };
      const nextState = FetchUserBasicInfoReducer(initialState, fetchUserBasicInfoStart());
      expect(nextState.loading).toBe(true);
      expect(nextState.error).toBe(null);
    });
  
    it('should handle fetchUserBasicInfoSuccess', () => {
      const initialState = {
        userBasicInfo: {},
        loading: true,
        error: null,
      };
      const payload = { name: 'John', age: 30 };
      const nextState = FetchUserBasicInfoReducer(
        initialState,
        fetchUserBasicInfoSuccess(payload)
      );
      expect(nextState.loading).toBe(false);
      expect(nextState.userBasicInfo).toEqual(payload);
    });
  
    it('should handle fetchUserBasicInfoFailure', () => {
      const initialState = {
        userBasicInfo: {},
        loading: true,
        error: null,
      };
      const payload = 'Error message';
      const nextState = FetchUserBasicInfoReducer(
        initialState,
        fetchUserBasicInfoFailure(payload)
      );
      expect(nextState.loading).toBe(false);
      expect(nextState.error).toBe(payload);
    });
  });
  