import { render, screen } from '@testing-library/react';
import Explanation from './Explanation';

/* Tests to check that Explanation component renders all required text. */

function testRender(regex) {
    render(<Explanation />);
    const element = screen.getByText(regex);
    expect(element).toBeInTheDocument();
}

/* Check that the explanation element correctly displays title */
test("Pet Finder Title is Present", () =>{
    testRender(/Pet Finder/i);
});

/* Check that the explanation element correctly displays subtitle */
test("Subtitle is present", () =>{
    testRender(/A mobile app that matches potential pet owners to shelter animals in need of a home./i);
});

/* Check that the explanation element correctly displays subtext */
test("Subtext is present", () =>{
    testRender(/This project was created during the Spring 2021 session/i);
});
