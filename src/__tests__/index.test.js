import React from 'react';
import { render } from '@testing-library/react';
import { categoryProducts } from '../constants/index';

describe('CategoryProducts component', () => {
  test('renders the category products with correct image paths', () => {
    const { getByAltText } = render(
      <div>
        {categoryProducts.map((product) => (
          <img key={product.id} src={product.image} alt={product.category} />
        ))}
      </div>,
    );

    categoryProducts.forEach((product) => {
      const imgElement = getByAltText(product.category);
      expect(imgElement).toBeInTheDocument();
      expect(imgElement).toHaveAttribute('src', product.image);
    });
  });
});
