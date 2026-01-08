import Contact from '../Contact';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

test("should load contact page",()=>{
    render(<Contact />);
    const heading=screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
});
test("should load text in contact page",()=>{
    render(<Contact />);
    const heading=screen.getByText("Contact Us");
    expect(heading).toBeInTheDocument();
});
//test and it are same
it("should load 2 input box in contact page",()=>{
    render(<Contact />);
    const heading=screen.getAllByRole("textbox");//for input box role is textbox
    expect(heading).toHaveLength(2);
});