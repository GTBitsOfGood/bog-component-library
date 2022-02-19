import '@testing-library/jest-dom/extend-expect';
import {
  render,
  cleanup,
} from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from '../../stories/Tooltip.stories';

describe("Tooltip", () => {
    afterEach(() => {
        cleanup();
    })

    const {Large} = composeStories(stories);

    it('renders', () => {
        const {queryByText} = render(<Large/>);
        expect(queryByText(/This is a description/i)).toBeInTheDocument();
    })
});