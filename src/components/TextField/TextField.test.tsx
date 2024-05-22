import '@testing-library/jest-dom/';
import { render, screen, fireEvent, getByLabelText, getByText,waitFor, getByRole  } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import TextField from './TextField';
import React from 'react';

const setup = () => {
    const utils = render(<TextField variant="outlined" />)
    const input = screen.getByLabelText('cost-input')
    return {
      input,
      ...utils,
    }
  }

test('textfield renders with default props', () => {
  render(<TextField variant="outlined" value='text' />);
  expect(screen.getByRole('textbox')).toBeTruthy()
  expect(screen.getByRole('textbox')).toHaveClass(/outlined/gi)
  expect(screen.getByRole('textbox')).toHaveValue('text')
})
test('textfield renders with placeholder and styles', () => {
    render(<TextField variant="outlined" value='text' placeholder='pl' error disabled />);
    expect(screen.getByPlaceholderText('pl')).toBeTruthy()
    expect(screen.getByRole('textbox')).toHaveClass(/error/gi)
    expect(screen.getByRole('textbox')).toBeDisabled()
    expect(screen.getByRole('textbox')).toHaveValue('text')
  })


test("textfield value changes", async () => {
  const user = userEvent.setup();
  const { getByPlaceholderText, getByText } = render(<TextField variant="outlined" />);
  
  await user.type(screen.getByRole("textbox"), "new");
  expect(screen.getByRole('textbox')).toHaveValue('new')
  
});