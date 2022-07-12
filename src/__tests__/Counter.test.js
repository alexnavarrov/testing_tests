import React from "react";
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from "../Counter";

describe('Components | Counter', () => {
    
    it('renders the component', () => {
        const props = {initialNumber: 2};
        const { container } = render(<Counter {...props} />);
        expect(container).toMatchSnapshot();
    });


    it('increments the counter', () => {
        const props = {initialNumber: 4};
        const { rerender } = render(<Counter {...props} />);
        const value = screen.getByTestId('value');
        //const button = screen.getByTestId('button');
        expect(value.textContent).toBe('4');

    })
});