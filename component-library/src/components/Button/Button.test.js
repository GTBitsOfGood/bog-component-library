import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {
  render,
  cleanup,
} from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from '../../stories/Button.stories';

describe('Button', () => {
  afterEach(() => {
    cleanup()
  })

  const { Primary } = composeStories(stories)

  it('should create a button', () => {
    const { getByRole } = render(<Primary />)
    const button = getByRole('button');
    expect(button).toBeInTheDocument();
  })
})