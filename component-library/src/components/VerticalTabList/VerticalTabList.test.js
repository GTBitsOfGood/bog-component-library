import '@testing-library/jest-dom/extend-expect';
import {
  render,
  cleanup,
} from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from '../../stories/VerticalTabList.stories';

describe("VerticalTabList", () => {
    afterEach(() => {
        cleanup();
    })

    const { LineTabs } = composeStories(stories);

    it('renders ul', () => {
        const {getByRole} = render(<LineTabs/>);
        expect(getByRole('list')).toBeInTheDocument();
    })

    it('renders 3 list items', () => {
        const {getByText} = render(<LineTabs/>);
        expect(getByText("Tab1")).toBeInTheDocument();
        expect(getByText("Tab2")).toBeInTheDocument();
        expect(getByText("Tab3")).toBeInTheDocument();
    })
});