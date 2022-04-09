import '@testing-library/jest-dom/extend-expect';
import {
  render,
  cleanup,
  fireEvent
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

    it('renders the header if set', () => {
        const {queryByText} = render(<SuccessAlert hasHeader={true}/>);
        expect(queryByText(/I'm a Success/i)).toBeInTheDocument();
    })

    it('renders the icon if set', () => {
        const {getByTestId} = render(<SuccessAlert hasIcon={true}/>);
        const icon = getByTestId("alert-icon");
        expect(icon).toBeInTheDocument();
    })

    it('checks if the onCloseClick event handler works', () => {
        const mockOnClick = jest.fn()
        const { getByTestId } = render(<SuccessAlert onCloseClick={mockOnClick()} />);
        const clickIndicator = getByTestId('close-button');
        fireEvent.click(clickIndicator);
        expect(mockOnClick).toHaveBeenCalledTimes(1);
    })
});