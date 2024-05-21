import '@testing-library/jest-dom/';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import Button from './Button';
import React from 'react';
import { JSX } from 'react/jsx-runtime';

test('button renders with default props', () => {
  render(<Button variant="contained" size={'medium'} children={'button'} />);
  expect(screen.getByRole('button')).toBeTruthy()
  expect(screen.getByRole('button')).toHaveClass(/contained/gi)
  expect(screen.getByRole('button')).toHaveClass(/medium/gi)
  expect(screen.getByRole('button')).toHaveTextContent('button')

})

test('button variant=outlined size=small', () => {
  render(<Button variant="outlined" size={'small'} children={'text'} />);
  expect(screen.getByRole('button')).toHaveClass(/outlined/gi)
  expect(screen.getByRole('button')).toHaveClass(/small/gi)
})
test('button variant=text', () => {
  render(<Button size="medium" variant={'text'} children={'text'} />);
  expect(screen.getByRole('button')).toHaveClass(/medium/gi)
  expect(screen.getByRole('button')).toHaveClass(/text/gi)
})
test('button children=Click me!', () => {
  render(<Button variant="outlined" children='Click me!' size={'small'} />);
  expect(screen.getByRole('button')).toHaveTextContent(/click me/gi)
})
test('button disabled', () => {
  render(<Button variant="outlined" children='Click me!' disabled size={'small'} />);
  expect(screen.getByRole('button')).toBeDisabled()
})

test("click on disabled button doesnt trigger onClick function", async () => {
  const onClick = jest.fn();
  render(<Button onClick={onClick} disabled variant={'outlined'} size={'small'} children={'text'} />);

  await userEvent.click(screen.getByRole('button'));
  expect(onClick).toHaveBeenCalledTimes(0);
});
test("click on enabled button triggers onClick function", async () => {
  const onClick = jest.fn();
  render(<Button onClick={onClick} variant={'outlined'} size={'small'} children={'text'} />);

  await userEvent.click(screen.getByRole('button'));
  expect(onClick).toHaveBeenCalledTimes(1);
});

