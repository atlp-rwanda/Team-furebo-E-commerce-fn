import store from '../redux/store';
import configureMockStore from 'redux-mock-store';

const mockStore = configureMockStore();

describe('Store Configuration', () => {
    it('should create a Redux store', () => {
      const initialState = {}; // Set your expected initial state here
      const testStore = mockStore(initialState);
      const configuredStore = store;
  
      expect(configuredStore).toBeDefined();
      expect(configuredStore.getState()).toEqual(initialState);
    });
  });
  
  