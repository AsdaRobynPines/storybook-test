import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders button', () => {
  render(<App />);
  const buttonText = screen.getByText(/press me/i);
  expect(buttonText).toBeInTheDocument();
});
