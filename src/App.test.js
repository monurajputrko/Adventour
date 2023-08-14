import { render, screen } from '@testing-library/react';
import DApp from './DApp';

test('renders learn react link', () => {
  render(<DApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
