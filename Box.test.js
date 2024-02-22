import React from 'react';
import { render } from '@testing-library/react';
import Box from './Box';

// Smoke test
test('renders without crashing', () => {
  render(<Box width="100" height="100" backgroundColor="red" />);
});

// Snapshot test
test('matches snapshot', () => {
  const { asFragment } = render(<Box width="100" height="100" backgroundColor="red" />);
  expect(asFragment()).toMatchSnapshot();
});
