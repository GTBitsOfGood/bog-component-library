import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {
  render,
  cleanup,
  fireEvent,
} from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from '../../stories/Dropdown.stories';

describe('Dropdown', () => {
  afterEach(() => {
    cleanup()
  })

  const { Regular } = composeStories(stories)

  it('should create a dropdown', () => {
    const { getByText, getAllByRole } = render(<Regular />)

    expect(getByText('Placeholder text')).toBeInTheDocument()
    expect(getAllByRole('button').length).toBe(1)
  })

  it('should be dropped down after clicking', () => {
    const { getByText, getAllByRole, getByAltText } = render(<Regular />)

    const dropdown = getByText('Placeholder text')
    expect(getByAltText('open')).toBeInTheDocument()
    fireEvent.click(dropdown)
    expect(getByAltText('close')).toBeInTheDocument()
    expect(getByText('Sharath')).toBeInTheDocument()
    expect(getAllByRole('button').length).toBe(7)
  })
})