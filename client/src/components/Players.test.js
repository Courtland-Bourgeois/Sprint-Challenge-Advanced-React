import React from 'react';
import { render } from '@testing-library/react';
import Players from './Players';

test('renders country text', () => {
  const { getByText } = render(<Players />)
  getByText(/country:/i)
})