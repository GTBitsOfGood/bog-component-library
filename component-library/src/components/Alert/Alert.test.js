import '@testing-library/jest-dom/extend-expect';
import {
  render,
  cleanup,
} from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from '../../stories/Alert.stories';

describe("Alert", () => {
    afterEach(() => {
        cleanup();
    })

    const {SuccessAlert} = composeStories(stories);

    it('renders', () => {
        const {queryByText} = render(<SuccessAlert/>);
        expect(queryByText(/This is a description/i)).toBeInTheDocument();
    })
});