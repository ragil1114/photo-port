import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '..';

afterEach(cleanup);

describe('About component', () => {
    // First Baseline aka 'Render' Test to verify that the component is rendering.
    it('renders', () => {
        render(<About />);
    });
    // Second 'Test Case' aka 'Snapshot' Test to verify that the expected and actual outcomes match.
    it('matches snapshot DOM node structure', () => {
        // render About
        const { asFragment } = render(<About />);
        expect(asFragment()).toMatchSnapshot();
    });
})