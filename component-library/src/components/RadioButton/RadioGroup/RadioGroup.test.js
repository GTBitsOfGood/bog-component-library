import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {
  render,
  cleanup,
  fireEvent,
} from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from '../../../stories/RadioGroup.stories';

describe('RadioGroup', () => {
  afterEach(() => {
    cleanup()
  })

  const testingBtns = [{
    value: "radio1",
    label: "Radio button 1",
    isDisabled: false,
    isChecked: false
  },
  {
    value: "radio2",
    label: "Radio button 2",
    isDisabled: false,
    isChecked: false
  },
  {
    value: "radio3",
    label: "Radio button 3",
    isDisabled: true,
    isChecked: false
  }
  ]

  const { Primary } = composeStories(stories)

  it('should create the default radio group', () => {
    const { getByLabelText } = render(< Primary buttons={testingBtns}
    />)
    expect(getByLabelText('Radio button 1')).toBeInTheDocument();
    expect(getByLabelText('Radio button 2')).toBeInTheDocument();
  })

  it('should select radio button 1', () => {
    const { getAllByRole } = render(< Primary buttons={testingBtns}
    />)
    const radioBtns = getAllByRole('radio');
    fireEvent.click(radioBtns[0]);
    expect(radioBtns[0]).toBeChecked();
    expect(radioBtns[1]).not.toBeChecked()
  })

  it('should select radio button 1 and then 2', () => {
    const { getAllByRole } = render(< Primary buttons={testingBtns}
    />)
    const radioBtns = getAllByRole('radio');
    fireEvent.click(radioBtns[0]);
    fireEvent.click(radioBtns[1]);
    expect(radioBtns[1]).toBeChecked();
    expect(radioBtns[0]).not.toBeChecked()
  })

  it('should create radio group with disabled button', () => {
    const { getAllByRole } = render(< Primary buttons={testingBtns}
    />)
    const radioBtns = getAllByRole('radio')
    expect(radioBtns[2]).toBeDisabled();
    fireEvent.click(radioBtns[2]);
    expect(radioBtns[2]).not.toBeChecked();
    expect(radioBtns[2]).toBeDisabled();
  });
})