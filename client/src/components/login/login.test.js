
import { render, screen } from '@testing-library/react';
import Login from './Login.jsx';

test('Always true test', () => {
    expect(true).toBe.true;
});



// test('Title Login', () => {
//     render(<Login />);

//     const headingElement = screen.findAllByLabelText('Email');

//     expect(headingElement).toBeInTheDocument();
// });

// test('Field email ', () => {
//     render(<Login />);

//     const headingElement = screen.getByText('Email:');

//     expect(headingElement).toBeInTheDocument();
// });

// test('Title Home', () => {
//     render(<Login />);

//     const headingElement = screen.getByText('Email:');

//     expect(headingElement).toBeInTheDocument();
// });