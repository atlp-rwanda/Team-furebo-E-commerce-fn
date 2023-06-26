import React, { createContext, useContext } from 'react';

// Create a mock AuthContext
const MockAuthContext = createContext({
  authenticateUser: () => {},
});

// Create a custom hook to access the mock AuthContext
const useMockAuthContext = () => useContext(MockAuthContext);

// Create a mock AuthProvider component
const MockAuthProvider = ({ children }) => {
  const authenticateUser = () => {
    // Mock authentication logic here
    // You can return a valid token or perform any desired mock behavior
    return 'validToken';
  };

  return (
    <MockAuthContext.Provider value={{ authenticateUser }}>
      {children}
    </MockAuthContext.Provider>
  );
};

export { MockAuthContext, useMockAuthContext, MockAuthProvider };
