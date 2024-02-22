import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Todo from './Todo';

// Smoke test
test('renders without crashing', () => {
  render(<Todo task="Test Todo" />);
});

// Snapshot test
test('matches snapshot', () => {
  const { asFragment } = render(<Todo task="Test Todo" />);
  expect(asFragment()).toMatchSnapshot();
});

// Business logic test
test('can trigger the delete function', () => {
  const mockDeleteFn = jest.fn();
  const { getByText } = render(<Todo task="Test Todo" deleteTodo={mockDeleteFn} />);
  const deleteButton = getByText('X');
  fireEvent.click(deleteButton);
  expect(mockDeleteFn).toHaveBeenCalled();
});
