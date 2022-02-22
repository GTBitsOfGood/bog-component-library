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

  const { RegularDropdown, RadioDropdown, CheckboxDropdown} = composeStories(stories)

  //creating all types of dropdowns
  it('should create a regular dropdown', () => {
    const { getByText, getAllByRole, getByAltText } = render(<RegularDropdown />)

    expect(getByText('Placeholder text')).toBeInTheDocument()
    expect(getAllByRole('button').length).toBe(1)
    expect(getByAltText('open')).toBeInTheDocument()
  })

  it('should create a radio dropdown', () => {
    const { getByText, getAllByRole, getByAltText } = render(<RadioDropdown />)

    expect(getByText('Placeholder text')).toBeInTheDocument()
    expect(getAllByRole('button').length).toBe(1)
    expect(getByAltText('open')).toBeInTheDocument()
  })

  it('should create a checkbox dropdown', () => {
    const { getByText, getAllByRole, getByAltText } = render(<CheckboxDropdown />)

    expect(getByText('Placeholder text')).toBeInTheDocument()
    expect(getAllByRole('button').length).toBe(1)
    expect(getByAltText('open')).toBeInTheDocument()
  })

  //opening all types of dropdowns
  it('regular dropdown should be dropped down after clicking', () => {
    const { getByText, getAllByRole, getByAltText } = render(<RegularDropdown />)

    const dropdown = getByText('Placeholder text')
    expect(getByAltText('open')).toBeInTheDocument()
    fireEvent.click(dropdown)
    expect(getByAltText('close')).toBeInTheDocument()
    expect(getByText('Sharath')).toBeInTheDocument()
    expect(getAllByRole('button').length).toBe(7)
  })

  it('radio dropdown should be dropped down after clicking', () => {
    const { getByText, getAllByRole, getByAltText } = render(<RadioDropdown />)

    const dropdown = getByText('Placeholder text')
    expect(getByAltText('open')).toBeInTheDocument()
    fireEvent.click(dropdown)
    expect(getByAltText('close')).toBeInTheDocument()
    expect(getByText('Sharath')).toBeInTheDocument()
    expect(getAllByRole('radio').length).toBe(6)
  })

  it('checkbox dropdown should be dropped down after clicking', () => {
    const { getByText, getAllByRole, getByAltText } = render(<CheckboxDropdown />)

    const dropdown = getByText('Placeholder text')
    expect(getByAltText('open')).toBeInTheDocument()
    fireEvent.click(dropdown)
    expect(getByAltText('close')).toBeInTheDocument()
    expect(getByText('Sharath')).toBeInTheDocument()
    expect(getAllByRole('checkbox').length).toBe(6)
  })

  //opening, selecting, closing all types of dropdowns
  it('regular dropdown should show selected item in selection box', () => {
    const { getByText, getAllByRole, getByAltText } = render(<RegularDropdown />)

    const dropdown = getByText('Placeholder text')
    expect(getByAltText('open')).toBeInTheDocument()
    fireEvent.click(dropdown)
    expect(getByAltText('close')).toBeInTheDocument()
    expect(getByText('Sharath')).toBeInTheDocument()
    expect(getAllByRole('button').length).toBe(7)
    const sharathButton = getByText('Sharath');
    fireEvent.click(sharathButton)
    expect(getByText('Sharath')).toBeInTheDocument()
    expect(getByAltText('open')).toBeInTheDocument()
  })

  it('radio dropdown should show selected item in selection box', () => {
    const { getByText, getAllByRole, getByAltText, getByLabelText } = render(<RadioDropdown />)

    const dropdown = getByText('Placeholder text')
    expect(getByAltText('open')).toBeInTheDocument()
    fireEvent.click(dropdown)
    expect(getByAltText('close')).toBeInTheDocument()
    expect(getByText('Sharath')).toBeInTheDocument()
    expect(getAllByRole('radio').length).toBe(6)
    const sharathRadio = getByLabelText('Sharath');
    fireEvent.click(sharathRadio)
    expect(getByText('Sharath')).toBeInTheDocument()
    expect(getByAltText('open')).toBeInTheDocument()
  })

  it('checkbox dropdown should show selected item in selection box', () => {
    const { getByText, getAllByRole, getByAltText } = render(<CheckboxDropdown />)

    const dropdown = getByText('Placeholder text')
    expect(getByAltText('open')).toBeInTheDocument()
    fireEvent.click(dropdown)
    expect(getByAltText('close')).toBeInTheDocument()
    expect(getByText('Sharath')).toBeInTheDocument()
    expect(getAllByRole('checkbox').length).toBe(6)
    const SharathCheckbox = getByText('Sharath');
    fireEvent.click(SharathCheckbox)
    fireEvent.click(dropdown)
    expect(getByText('Sharath')).toBeInTheDocument()
    expect(getByAltText('open')).toBeInTheDocument()
  })

  //opening and selecting two times for all types of dropdowns
  it('regular dropdown should show last selected item in selection box', () => {
    const { getByText, getAllByRole, getByAltText } = render(<RegularDropdown />)

    const dropdown = getByText('Placeholder text')
    expect(getByAltText('open')).toBeInTheDocument()
    fireEvent.click(dropdown)
    const sharathButton = getByText('Sharath');
    fireEvent.click(sharathButton)
    fireEvent.click(dropdown)
    expect(getByAltText('close')).toBeInTheDocument()
    expect(getByText('Alyson')).toBeInTheDocument()
    expect(getAllByRole('button').length).toBe(7)
    const alysonButton = getByText('Alyson');
    fireEvent.click(alysonButton)
    expect(getByText('Alyson')).toBeInTheDocument()
    expect(getByAltText('open')).toBeInTheDocument()
  })

  it('radio dropdown should show last selected item in selection box', () => {
    const { getByText, getAllByRole, getByAltText, getByLabelText } = render(<RadioDropdown />)

    const dropdown = getByText('Placeholder text')
    expect(getByAltText('open')).toBeInTheDocument()
    fireEvent.click(dropdown)
    const sharathRadio = getByLabelText('Sharath');
    fireEvent.click(sharathRadio)
    fireEvent.click(dropdown)
    expect(getByAltText('close')).toBeInTheDocument()
    expect(getByText('Alyson')).toBeInTheDocument()
    expect(getAllByRole('radio').length).toBe(6)
    const alysonRadio = getByLabelText('Alyson');
    fireEvent.click(alysonRadio)
    expect(getByText('Alyson')).toBeInTheDocument()
    expect(getByAltText('open')).toBeInTheDocument()
  })

  it('checkbox dropdown should show all selected item in selection box', () => {
    const { getByText, getAllByRole, getByAltText} = render(<CheckboxDropdown />)
    
    const dropdown = getByText('Placeholder text')
    expect(getByAltText('open')).toBeInTheDocument()
    fireEvent.click(dropdown)
    const SharathCheckbox = getByText('Sharath');
    fireEvent.click(SharathCheckbox)
    fireEvent.click(dropdown)
    fireEvent.click(dropdown)
    expect(getByText('Alyson')).toBeInTheDocument()
    expect(getAllByRole('checkbox').length).toBe(6)
    const alysonCheckbox = getByText('Alyson');
    fireEvent.click(alysonCheckbox)
    fireEvent.click(dropdown)
    expect(getByText('Sharath, Alyson')).toBeInTheDocument()
    expect(getByAltText('open')).toBeInTheDocument()
  })

  it('checkbox dropdown should show all consecutively selected item in selection box', () => {
    const { getByText, getByAltText} = render(<CheckboxDropdown />)
    
    const dropdown = getByText('Placeholder text')
    expect(getByAltText('open')).toBeInTheDocument()
    fireEvent.click(dropdown)
    const SharathCheckbox = getByText('Sharath');
    fireEvent.click(SharathCheckbox)
    const alysonCheckbox = getByText('Alyson');
    fireEvent.click(alysonCheckbox)
    fireEvent.click(dropdown)
    expect(getByText('Sharath, Alyson')).toBeInTheDocument()
    expect(getByAltText('open')).toBeInTheDocument()
  })
})