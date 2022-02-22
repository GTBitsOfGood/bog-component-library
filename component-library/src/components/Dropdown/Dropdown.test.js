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
    expect(getAllByRole('button').length).toBe(10)
  })

  it('radio dropdown should be dropped down after clicking', () => {
    const { getByText, getAllByRole, getByAltText } = render(<RadioDropdown />)

    const dropdown = getByText('Placeholder text')
    expect(getByAltText('open')).toBeInTheDocument()
    fireEvent.click(dropdown)
    expect(getByAltText('close')).toBeInTheDocument()
    expect(getByText('Sharath')).toBeInTheDocument()
    expect(getAllByRole('radio').length).toBe(9)
  })

  it('checkbox dropdown should be dropped down after clicking', () => {
    const { getByText, getAllByRole, getByAltText } = render(<CheckboxDropdown />)

    const dropdown = getByText('Placeholder text')
    expect(getByAltText('open')).toBeInTheDocument()
    fireEvent.click(dropdown)
    expect(getByAltText('close')).toBeInTheDocument()
    expect(getByText('Sharath')).toBeInTheDocument()
    expect(getAllByRole('checkbox').length).toBe(9)
  })

  //opening, selecting, closing all types of dropdowns
  it('regular dropdown should show selected item in selection box', () => {
    const { getByText, getAllByRole, getByAltText } = render(<RegularDropdown />)

    const dropdown = getByText('Placeholder text')
    expect(getByAltText('open')).toBeInTheDocument()
    fireEvent.click(dropdown)
    expect(getByAltText('close')).toBeInTheDocument()
    expect(getByText('Sharath')).toBeInTheDocument()
    expect(getAllByRole('button').length).toBe(10)
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
    expect(getAllByRole('radio').length).toBe(9)
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
    expect(getAllByRole('checkbox').length).toBe(9)
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
    expect(getAllByRole('button').length).toBe(10)
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
    expect(getAllByRole('radio').length).toBe(9)
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
    expect(getAllByRole('checkbox').length).toBe(9)
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

  //multis-select or checkbox dropdown updates appropriately 
  it('checkbox dropdown should show only selected items in selection box: removes last on list', () => {
    const { getByText, getByAltText} = render(<CheckboxDropdown />)
    
    const dropdown = getByText('Placeholder text')
    expect(getByAltText('open')).toBeInTheDocument()
    fireEvent.click(dropdown)
    const SharathCheckbox = getByText('Sharath');
    fireEvent.click(SharathCheckbox)
    const alysonCheckbox = getByText('Alyson');
    fireEvent.click(alysonCheckbox)
    fireEvent.click(dropdown)
    fireEvent.click(dropdown)
    const alysonCheckbox2 = getByText('Alyson');
    fireEvent.click(alysonCheckbox2)
    fireEvent.click(dropdown)
    expect(getByText('Sharath')).toBeInTheDocument()
    expect(getByAltText('open')).toBeInTheDocument()
  })

  it('checkbox dropdown should show only selected items in selection box: removes first on list', () => {
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
    fireEvent.click(dropdown)
    const SharathCheckbox2 = getByText('Sharath');
    fireEvent.click(SharathCheckbox2)
    fireEvent.click(dropdown)
    expect(getByText('Alyson')).toBeInTheDocument()
    expect(getByAltText('open')).toBeInTheDocument()
  })

  //mutli-select or checkbox dropdown returns to placeholder if no items are selected


  it('checkbox dropdown should show placeholder text if no items are selected', () => {
    const { getByText, getByAltText, getAllByRole} = render(<CheckboxDropdown />)
    
    const dropdown = getByText('Placeholder text')
    expect(getByAltText('open')).toBeInTheDocument()
    fireEvent.click(dropdown)
    const SharathCheckbox = getByText('Sharath');
    fireEvent.click(SharathCheckbox)
    const alysonCheckbox = getByText('Alyson');
    fireEvent.click(alysonCheckbox)
    fireEvent.click(dropdown)
    fireEvent.click(dropdown)
    const SharathCheckbox2 = getAllByRole('checkbox')[0];
    fireEvent.click(SharathCheckbox2)
    const alysonCheckbox2 = getAllByRole('checkbox')[1];
    fireEvent.click(alysonCheckbox2)
    fireEvent.click(dropdown)
    expect(getByText('Placeholder text')).toBeInTheDocument()
    expect(getAllByRole('button').length).toBe(1)
    expect(getByAltText('open')).toBeInTheDocument()
  })

})