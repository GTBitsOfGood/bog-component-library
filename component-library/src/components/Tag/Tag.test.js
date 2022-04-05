import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {
  render,
  cleanup,
} from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from '../../stories/Tag.stories';

describe("Tag", () => {
    afterEach(() => {
        cleanup();
    })

    const { Info, Danger, Success, Warning, Archived } = composeStories(stories)

    it('should create an info tag', () => {
        const { getByText } = render(<Info />)
        expect(getByText('Info')).toBeInTheDocument();
    })

    it('should create an danger tag', () => {
        const { getByText } = render(<Danger />)
        expect(getByText('Danger')).toBeInTheDocument();
    })

    it('should create an success tag', () => {
        const { getByText } = render(<Success />)
        expect(getByText('Success')).toBeInTheDocument();
    })

    it('should create an warning tag', () => {
        const { getByText } = render(<Warning />)
        expect(getByText('Warning')).toBeInTheDocument();
    })

    it('should create an archived tag', () => {
        const { getByText } = render(<Archived />)
        expect(getByText('Archived')).toBeInTheDocument();
    })
})