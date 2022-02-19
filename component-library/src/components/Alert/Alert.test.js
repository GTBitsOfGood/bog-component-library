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

    it('renders the normal component', () => {
        const {queryByText} = render(<SuccessAlert/>);
        expect(queryByText(/This is a description/i)).toBeInTheDocument();
    });

    it('renders the button if set', () => {
        const {getByTestId} = render(<SuccessAlert hasButton={true}/>);
        const button = getByTestId("alert-button");
        expect(button).toBeInTheDocument();
    })

    it('render the header if set', () => {
        const {queryByText} = render(<SuccessAlert hasHeader={true}/>);
        expect(queryByText(/I'm a Success/i)).toBeInTheDocument();
    })
});