import React from 'react';
import { render, screen } from '@testing-library/react';
import Buses from './pages/Buses';

test('renders learn react link', () => {
  render(<Buses />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
