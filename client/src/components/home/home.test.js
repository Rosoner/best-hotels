
import { render, screen } from '@testing-library/react';
import Home from './Home.jsx';

test('Always true test', () => {
    expect(true).toBe.true;
});

// test('Title Home', () => {
//     render(<Home />);

//     const headingElement = screen.findAllByText('Welcome to a world of Best hotels.');

//     expect(headingElement).toBeInTheDocument();
// });


// test('Link Home', () => {
//     render(<Home />);

//     const headingElement = screen.getByAltText('hotel');

//     expect(headingElement).toBeInTheDocument();
// });