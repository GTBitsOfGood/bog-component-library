import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {
  render,
  cleanup,
  fireEvent,
} from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from '../../stories/ScrollNavigation.stories';

describe('Dropdown', () => {
  afterEach(() => {
    cleanup()
  })
  const { RegularScrollNavigation} = composeStories(stories)

  //creating a Scrolling Table Of Contents
  it('should create a Scrolling Table Of Contents', () => {
    const { getByText, getAllByRole} = render(<RegularScrollNavigation />)

    expect(getByText('How to use figma array 1')).toBeInTheDocument()
    expect(getByText('How to use figma array 2')).toBeInTheDocument()
    expect(getByText('How to use figma array 3')).toBeInTheDocument()

    expect(getAllByRole('link').length).toBe(3)

    expect(getByText('How to use figma array 1').closest('a')).toHaveAttribute('href', '#array1')
    expect(getByText('How to use figma array 2').closest('a')).toHaveAttribute('href', '#array2')
    expect(getByText('How to use figma array 3').closest('a')).toHaveAttribute('href', '#array3')
                      
  })

})