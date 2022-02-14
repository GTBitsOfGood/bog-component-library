import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {
  render,
  cleanup,
  fireEvent,
} from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './Checkbox.stories';

describe('Checkbox', () => {
  afterEach(() => {
    cleanup()
  })

  const { Primary } = composeStories(stories)

  it('should create a checkbox', () => {
    const { getByRole } = render(<Primary />)

    expect(getByRole('checkbox')).toBeInTheDocument()
  })

  it('should be checked after clicking', () => {
    const { getByRole } = render(<Primary />)

    const checkbox = getByRole('checkbox')
    fireEvent.click(checkbox)

    expect(checkbox.checked).toBe(true)
  })
})