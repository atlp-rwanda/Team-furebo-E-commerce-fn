import rateProductReducer, {
  rateProductStart,
  rateProductSuccess,
  rateError,
  clearError,
  clearSuccessCondition,
} from '../redux/slices/rateProductSlice';

describe('rateProductSlice', () => {
  describe('reducers', () => {
    it('should handle rateProductStart', () => {
      const initialState = {
        rateInfo: null,
        successCondition: false,
        pending: false,
        error: {
          condition: false,
          message: '',
        },
      };

      const newState = rateProductReducer(initialState, rateProductStart());
      expect(newState.pending).toBe(true);
    });

    it('should handle rateProductSuccess', () => {
      const initialState = {
        rateInfo: null,
        successCondition: false,
        pending: false,
        error: {
          condition: false,
          message: '',
        },
      };

      const payload = { rating: 5 };
      const newState = rateProductReducer(
        initialState,
        rateProductSuccess(payload)
      );
      expect(newState.successCondition).toBe(true);
      expect(newState.pending).toBe(false);
      expect(newState.rateInfo).toEqual(payload);
    });

    it('should handle rateError', () => {
      const initialState = {
        rateInfo: null,
        successCondition: false,
        pending: false,
        error: {
          condition: false,
          message: '',
        },
      };

      const payload = 'An error occurred.';
      const newState = rateProductReducer(initialState, rateError(payload));
      expect(newState.error.condition).toBe(true);
      expect(newState.error.message).toBe(payload);
      expect(newState.pending).toBe(false);
    });

    it('should handle clearError', () => {
      const initialState = {
        rateInfo: null,
        successCondition: false,
        pending: false,
        error: {
          condition: true,
          message: 'An error occurred.',
        },
      };

      const newState = rateProductReducer(initialState, clearError());
      expect(newState.error.condition).toBe(false);
    });

    it('should handle clearSuccessCondition', () => {
      const initialState = {
        rateInfo: { rating: 5 },
        successCondition: true,
        pending: false,
        error: {
          condition: false,
          message: '',
        },
      };

      const newState = rateProductReducer(
        initialState,
        clearSuccessCondition()
      );
      expect(newState.successCondition).toBe(false);
    });
  });
});
