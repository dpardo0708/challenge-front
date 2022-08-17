import React from 'react';
import { render, screen } from '@testing-library/react';
import Result from './result';

test('renders learn react link', () => {
  render(<Result />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});