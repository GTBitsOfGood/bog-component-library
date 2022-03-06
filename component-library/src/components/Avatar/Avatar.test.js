//very basic testing...

import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {
  render,
  cleanup,
} from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from '../../stories/Avatar.stories';

describe('Avatar', () => {
  afterEach(() => {
    cleanup()
  })

  const { Primary } = composeStories(stories)

  it('should create a avatar', () => {
    const { getByRole } = render(<Primary />)
    const avatar = getByRole('avatar');
    expect(avatar).toBeInTheDocument();
  })
})