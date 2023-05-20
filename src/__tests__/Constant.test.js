import { pages, categoryProducts, Latestproducts } from '../constants/Constant';

describe('Data Tests', () => {
  test('pages should have valid properties', () => {
    expect(Array.isArray(pages)).toBe(true);

    pages.forEach(page => {
      expect(page).toHaveProperty('id');
      expect(page).toHaveProperty('name');
      expect(page).toHaveProperty('link');
    });
  });

  test('categoryProducts should have valid properties', () => {
    expect(Array.isArray(categoryProducts)).toBe(true);

    categoryProducts.forEach(product => {
      expect(product).toHaveProperty('id');
      expect(product).toHaveProperty('image');
      expect(product).toHaveProperty('category');
    });
  });

  test('Latestproducts should have valid properties', () => {
    expect(Array.isArray(Latestproducts)).toBe(true);

    Latestproducts.forEach(product => {
      expect(product).toHaveProperty('id');
      expect(product).toHaveProperty('title');
      expect(product).toHaveProperty('image');
      expect(product).toHaveProperty('price');
      expect(product).toHaveProperty('rating');
    });
  });
});
