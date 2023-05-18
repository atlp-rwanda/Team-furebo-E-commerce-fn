import React from 'react';
import { render } from '@testing-library/react';
import Home from '../components/Home';

describe('Home component', () => {
  it('renders the correct text', () => {
    const { getByText } = render(<Home />);
    const headingElement = getByText('HELLO, FRONT-END');
    expect(headingElement).toBeInTheDocument();
  });
});
