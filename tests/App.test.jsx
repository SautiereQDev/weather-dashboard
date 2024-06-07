import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Carousel from '../src/components/Carousel.jsx';
import Card from "../src/components/Card.jsx";

test('verifies that the carousel buttons work correctly', () => {
	// Assuming that the Carousel component takes an array of components as a prop
	const components = Array(10).fill(<Card/>);

	render(<Carousel components={components} nbElements={8} />);

	const leftButton = screen.getByRole('button', { name: 'left' });
	const rightButton = screen.getByRole('button', { name: 'right' });

	// Simulate a click on the left button
	userEvent.click(leftButton);
	// Add your assertions to check the behavior of the carousel after clicking the left button

	// Simulate a click on the right button
	userEvent.click(rightButton);
	// Add your assertions to check the behavior of the carousel after clicking the right button
});