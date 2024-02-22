import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import BoxList from './BoxList';

// Smoke test
test('renders without crashing', () => {
  render(<BoxList />);
});

// Snapshot test
test('matches snapshot', () => {
  const { asFragment } = render(<BoxList />);
  expect(asFragment()).toMatchSnapshot();
});

// Business logic test
test('can add a new box', () => {
  const { getByLabelText, getByText } = render(<BoxList />);

  const widthInput = getByLabelText('Width');
  const heightInput = getByLabelText('Height');
  const backgroundColorInput = getByLabelText('Background Color');
  const addButton = getByText('Add Box');

  fireEvent.change(widthInput, { target: { value: '100' } });
  fireEvent.change(heightInput, { target: { value: '100' } });
  fireEvent.change(backgroundColorInput, { target: { value: 'red' } });
  fireEvent.click(addButton);

  // Check if the box is added
  const removeButton = getByText('X');
  expect(removeButton).toBeInTheDocument();
});
