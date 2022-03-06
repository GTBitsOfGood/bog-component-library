import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {
  render,
  cleanup,
} from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from '../../stories/Input.stories';

describe('Input', () => {
    afterEach(() => {
      cleanup()
    })

    const { Primary } = composeStories(stories)
  
    it('should create an input', () => {
      const { getByRole } = render(<Primary />)
      const input = getByRole('textbox');
      expect(input).toBeInTheDocument();
    })
  })

  