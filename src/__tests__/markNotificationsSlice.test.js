import { configureStore } from '@reduxjs/toolkit';
import markNotificationsReducer, {
  updateStart,
  updateSuccess,
  updateError,
  clearError,
  clearSuccessCondition,
} from '../redux/slices/markNotificationsSlice';

describe('markNotificationsSlice', () => {
  it('should update the state correctly when updateStart action is dispatched', () => {
    const store = configureStore({ reducer: markNotificationsReducer });
    store.dispatch(updateStart());

    const state = store.getState();
    expect(state.pending).toBe(true);
  });

  it('should update the state correctly when updateSuccess action is dispatched', () => {
    const store = configureStore({ reducer: markNotificationsReducer });
    const isRead = true;
    store.dispatch(updateSuccess(isRead));

    const state = store.getState();
    expect(state.successCondition).toBe(true);
    expect(state.pending).toBe(false);
    expect(state.isRead).toBe(isRead);
  });

  it('should update the state correctly when updateError action is dispatched', () => {
    const store = configureStore({ reducer: markNotificationsReducer });
    const errorMessage = 'An error occurred';
    store.dispatch(updateError(errorMessage));

    const state = store.getState();
    expect(state.error.condition).toBe(true);
    expect(state.error.message).toBe(errorMessage);
    expect(state.pending).toBe(false);
  });

  it('should update the state correctly when clearError action is dispatched', () => {
    const store = configureStore({ reducer: markNotificationsReducer });
    store.dispatch(clearError());

    const state = store.getState();
    expect(state.error.condition).toBe(false);
  });

  it('should update the state correctly when clearSuccessCondition action is dispatched', () => {
    const store = configureStore({ reducer: markNotificationsReducer });
    store.dispatch(clearSuccessCondition());

    const state = store.getState();
    expect(state.successCondition).toBe(false);
  });
});
