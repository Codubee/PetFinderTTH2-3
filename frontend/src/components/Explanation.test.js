import { render, screen } from '@testing-library/react';
import Explanation from './Explanation';

/* Tests to check that Explanation component renders all required text. */

/* Check that the explanation element correctly displays title */
test("Pet Finder Title is Present", () =>{
    render(<Explanation />);
    const element = screen.getByText(/Pet Finder/i);
    expect(element).toBeInTheDocument();
});

/* Check that the explanation element correctly displays subtitle */
test("Subtitle is present", () =>{
    render(<Explanation />);
    const element = screen.getByText(/A mobile app that matches potential pet owners to shelter animals in need of a home./i);
    expect(element).toBeInTheDocument();
});

/* Check that the explanation element correctly displays subtext */
test("Subtext is present", () =>{
    render(<Explanation />);
    const element = screen.getByText(/This project was created during the Spring 2021 session/i);
    expect(element).toBeInTheDocument();
});
