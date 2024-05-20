import '@testing-library/jest-dom/';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import Button from './Button';
import React from 'react';
import { JSX } from 'react/jsx-runtime';

test('button renders', () => {
  render(<Button variant="outlined" />);
  expect(screen.getByRole('button')).toBeTruthy()
})

test('button variant=outlined', () => {
  render(<Button variant="outlined" />);
  expect(screen.getByRole('button')).toHaveClass(/outlined/gi)
})
test('button variant=outlined', () => {
  render(<Button size="medium" />);
  expect(screen.getByRole('button')).toHaveClass(/medium/gi)
})
test('button children=Click me!', () => {
  render(<Button variant="outlined" children='Click me!' />);
  expect(screen.getByRole('button')).toHaveTextContent(/click me/gi)
})
test('button disabled', () => {
  render(<Button variant="outlined" children='Click me!' disabled />);
  expect(screen.getByRole('button')).toBeDisabled()
})

test("click on disabled button doesnt trigger onClick function", async () => {
  const onClick = jest.fn();
  render(<Button onClick={onClick} disabled />);

  await userEvent.click(screen.getByRole('button'));
  expect(onClick).toHaveBeenCalledTimes(0);
});
test("click on enabled button triggers onClick function", async () => {
  const onClick = jest.fn();
  render(<Button onClick={onClick} />);

  await userEvent.click(screen.getByRole('button'));
  expect(onClick).toHaveBeenCalledTimes(1);
});

