import React from 'react';
import { render } from '@testing-library/react';
import NavBar from './Navbar';

test('renders nav bar title', () => {
  const { getByText } = render(<NavBar />)
  getByText(/women's world cup players/i)
})