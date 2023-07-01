/* eslint-disable linebreak-style */
/* eslint-disable no-trailing-spaces */
/* eslint-disable indent */
import addUserEssentialInfoReducer, {
    adduserEssentialInfoItemsStart,
    adduserEssentialInfoItemsSuccess,
    adduserEssentialInfoItemsFailure,
  } from '../../redux/slices/UserProfile/AddUserEssentialInfoSlice';
  
  describe('AddUserEssentialInfoSlice', () => {
    it('should handle adduserEssentialInfoItemsStart', () => {
      const initialState = {
        addUserEssentialInfoSlice: [],
        loading: false,
        error: null,
      };
      const nextState = addUserEssentialInfoReducer(initialState, adduserEssentialInfoItemsStart());
      expect(nextState.loading).toBe(true);
      expect(nextState.error).toBe(null);
    });
  
    it('should handle adduserEssentialInfoItemsSuccess', () => {
      const initialState = {
        addUserEssentialInfoSlice: [],
        loading: true,
        error: null,
      };
      const payload = ['Item 1', 'Item 2'];
      const nextState = addUserEssentialInfoReducer(
        initialState,
        adduserEssentialInfoItemsSuccess(payload)
      );
      expect(nextState.loading).toBe(false);
      expect(nextState.addUserEssentialInfoSlice).toEqual(payload);
    });
  
    it('should handle adduserEssentialInfoItemsFailure', () => {
      const initialState = {
        addUserEssentialInfoSlice: [],
        loading: true,
        error: null,
      };
      const payload = 'Error message';
      const nextState = addUserEssentialInfoReducer(
        initialState,
        adduserEssentialInfoItemsFailure(payload)
      );
      expect(nextState.loading).toBe(false);
      expect(nextState.error).toEqual(payload);
    });
  });
  