import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

describe('App', () => {
  it('renders the Home component when the root path is accessed', () => {
    const { getByText } = render(<App />);
    expect(getByText('HELLO, FRONT-END')).toBeInTheDocument();
  });
});
  