import { render, screen } from '@testing-library/react';
import Carousel from '../src/components/Carousel.jsx';

test('verifies that the carousel displays 8 cards', () => {
	// Assuming that the Carousel component takes an array of components as a prop
	const components = Array(8).fill(<div role="card"></div>);

	render(<Carousel components={components} nbElements={8} />);

	const cards = screen.getAllByRole('card');
	expect(cards).toHaveLength(8);
});