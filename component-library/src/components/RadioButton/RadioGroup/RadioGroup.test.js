import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {
    render,
    cleanup,
} from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from '../../stories/RadioGroup.stories';

describe('RadioGroup', () => {
    afterEach(() => {
        cleanup()
    })

    const { Primary } = composeStories(stories)

    it('should create a radio group', () => {
        const { getByRole } = render( < Primary / > )
        const radioButton = getByRole('RadioButton');
        expect(radioButton).toBeInTheDocument();
        const input = getByRole('input');
        expect(input).toBeInTheDocument();
    })
})