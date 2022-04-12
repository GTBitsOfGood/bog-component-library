import '@testing-library/jest-dom/extend-expect';
import {
  render,
  cleanup,
  screen,
  fireEvent
} from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from '../../stories/Switch.stories';



describe("Generic Switch Testing", () => {
    afterEach(() => {
        cleanup();
    })

    const {Unlabeled} = composeStories(stories);

    it('Checks if switch is disabled when disabled prop is passed in', () => {
        const {getByRole} = render(<Unlabeled disabled={true}/>);
        const unlabeledSwitch = getByRole('checkbox');


        // after clicking a disabled switch, it should still be disabled
        expect(unlabeledSwitch).toBeDisabled();
        expect(unlabeledSwitch).not.toBeChecked();
        fireEvent.click(unlabeledSwitch);
        expect(unlabeledSwitch).toBeDisabled();
    })

    it('Checks if element is toggled', () => {
        const {getByRole} = render(<Unlabeled />);
        const unlabeledSwitch = getByRole('checkbox');
        
        // after clicking the switch, it should be checked
        expect(unlabeledSwitch).not.toBeChecked();
        fireEvent.click(unlabeledSwitch);
        expect(unlabeledSwitch).toBeChecked();
    })
})

describe("Unlabled Switch Testing", () => {  
    afterEach(() => {
        cleanup();
    })

    const {Unlabeled} = composeStories(stories);

    it('Renders unlabled switch', () => {
        const {getByRole} = render(<Unlabeled/>);
        const unlabeledSwitch = getByRole('checkbox');

        // ensure label does not exist
        expect(unlabeledSwitch).toBeInTheDocument();
        expect(unlabeledSwitch).toBeEnabled();
        expect(screen.queryByText(/toggle/i)).toBeNull();
    })


    it('Checks if default label when hasLabel prop is set to true', () => {
        render(<Unlabeled hasLabel={true}/>);
        screen.getByText(/switch/i);
    })

    it('Checks if custom label when hasLabel prop is set to true', () => {
        render(<Unlabeled hasLabel={true} label="customLabel" />);
        screen.getByText("customLabel");
    })
});

describe("Labeled Switch Testing", () => {
    afterEach(() => {
        cleanup();
    })

    const {Labeled} = composeStories(stories);

    it('Renders labeled switch', () => {
        const {getByRole} = render(<Labeled/>);
        const labeledSwitch = getByRole('checkbox');
        
        // check if label exists
        expect(labeledSwitch).toBeInTheDocument();
        expect(labeledSwitch).toBeEnabled();
        expect(labeledSwitch).not.toBeChecked();
        screen.getByText(/toggle/i);
    })

    it('Checks if custom label is rendered on a labeled switch', () => {
        render(<Labeled label="customLabel"/>);
        screen.getByText("customLabel");
    })
})