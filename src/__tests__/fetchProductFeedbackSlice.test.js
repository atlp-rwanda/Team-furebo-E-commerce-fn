import fetchProductFeedbackReducer, {
  updateStart,
  updateSuccess,
  updateError,
  clearError,
  clearSuccessCondition,
} from '../redux/slices/fetchProductFeedbackSlice';

describe('fetchProductFeedbackSlice', () => {
  describe('reducers', () => {
    it('should handle updateStart', () => {
      const initialState = {
        feedbackStatus: null,
        successCondition: false,
        pending: false,
        error: {
          condition: false,
          message: '',
        },
      };

      const newState = fetchProductFeedbackReducer(initialState, updateStart());
      expect(newState.pending).toBe(true);
    });

    it('should handle updateSuccess', () => {
      const initialState = {
        feedbackStatus: null,
        successCondition: false,
        pending: false,
        error: {
          condition: false,
          message: '',
        },
      };

      const payload = { feedback: 'Good job!' };
      const newState = fetchProductFeedbackReducer(
        initialState,
        updateSuccess(payload)
      );
      expect(newState.successCondition).toBe(true);
      expect(newState.pending).toBe(false);
      expect(newState.feedbackStatus).toEqual(payload);
    });

    it('should handle updateError', () => {
      const initialState = {
        feedbackStatus: null,
        successCondition: false,
        pending: false,
        error: {
          condition: false,
          message: '',
        },
      };

      const payload = 'An error occurred.';
      const newState = fetchProductFeedbackReducer(
        initialState,
        updateError(payload)
      );
      expect(newState.error.condition).toBe(true);
      expect(newState.error.message).toBe(payload);
      expect(newState.pending).toBe(false);
    });

    it('should handle clearError', () => {
      const initialState = {
        feedbackStatus: null,
        successCondition: false,
        pending: false,
        error: {
          condition: true,
          message: 'An error occurred.',
        },
      };

      const newState = fetchProductFeedbackReducer(initialState, clearError());
      expect(newState.error.condition).toBe(false);
      expect(newState.error.message).toBe('');
    });

    it('should handle clearSuccessCondition', () => {
      const initialState = {
        feedbackStatus: { feedback: 'Good job!' },
        successCondition: true,
        pending: false,
        error: {
          condition: false,
          message: '',
        },
      };

      const newState = fetchProductFeedbackReducer(
        initialState,
        clearSuccessCondition()
      );
      expect(newState.successCondition).toBe(false);
    });
  });
});
