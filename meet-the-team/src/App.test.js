import { render, screen } from '@testing-library/react';
import Gallery from './Gallery.js';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
