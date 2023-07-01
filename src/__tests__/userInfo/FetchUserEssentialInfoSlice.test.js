import FetchUserEssentialInfoReducer, {
    fetchUserEssentialInfoStart,
    fetchUserEssentialInfoSuccess,
    fetchUserEssentialInfoFailure,
  } from '../../redux/slices/UserProfile/FetchUserEssentialInfoSlice';
  
  describe('FetchUserEssentialInfoSlice', () => {
    it('should handle fetchUserEssentialInfoStart', () => {
      const initialState = {
        userEssentialInfo: {},
        loading: false,
        error: null,
      };
      const nextState = FetchUserEssentialInfoReducer(initialState, fetchUserEssentialInfoStart());
      expect(nextState.loading).toBe(true);
      expect(nextState.error).toBe(null);
    });
  
    it('should handle fetchUserEssentialInfoSuccess', () => {
      const initialState = {
        userEssentialInfo: {},
        loading: true,
        error: null,
      };
      const payload = { name: 'John', age: 30 };
      const nextState = FetchUserEssentialInfoReducer(
        initialState,
        fetchUserEssentialInfoSuccess(payload)
      );
      expect(nextState.loading).toBe(false);
      expect(nextState.userEssentialInfo).toEqual(payload);
    });
  
    it('should handle fetchUserEssentialInfoFailure', () => {
      const initialState = {
        userEssentialInfo: {},
        loading: true,
        error: null,
      };
      const payload = 'Error message';
      const nextState = FetchUserEssentialInfoReducer(
        initialState,
        fetchUserEssentialInfoFailure(payload)
      );
      expect(nextState.loading).toBe(false);
      expect(nextState.error).toBe(payload);
    });
  });
  