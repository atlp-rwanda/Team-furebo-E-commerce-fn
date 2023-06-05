import ChangePasswordAtGivenTimeReducer, {
    fetchChangePasswordAtGivenTimeStart,
    fetchChangePasswordAtGivenTimeSuccess,
    fetchChangePasswordAtGivenTimeFailure,
  } from '../../redux/slices/UserProfile/ChangePasswordAtGivenTimeSlice';
  
  describe('ChangePasswordAtGivenTimeSlice', () => {
    it('should handle fetchChangePasswordAtGivenTimeStart', () => {
      const initialState = {
        isExpired: false,
        loading: false,
        error: null,
      };
      const nextState = ChangePasswordAtGivenTimeReducer(initialState, fetchChangePasswordAtGivenTimeStart());
      expect(nextState.loading).toBe(true);
      expect(nextState.error).toBe(null);
    });
  
    it('should handle fetchChangePasswordAtGivenTimeSuccess', () => {
      const initialState = {
        isExpired: false,
        loading: true,
        error: null,
      };
      const payload = true;
      const nextState = ChangePasswordAtGivenTimeReducer(
        initialState,
        fetchChangePasswordAtGivenTimeSuccess(payload)
      );
      expect(nextState.loading).toBe(false);
      expect(nextState.isExpired).toBe(payload);
    });
  
    it('should handle fetchChangePasswordAtGivenTimeFailure', () => {
      const initialState = {
        isExpired: false,
        loading: true,
        error: null,
      };
      const payload = 'Error message';
      const nextState = ChangePasswordAtGivenTimeReducer(
        initialState,
        fetchChangePasswordAtGivenTimeFailure(payload)
      );
      expect(nextState.loading).toBe(false);
      expect(nextState.error).toBe(payload);
    });
  });
  