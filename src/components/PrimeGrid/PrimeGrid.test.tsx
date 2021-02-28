import React from 'react';
import { render, screen } from '@testing-library/react';

import PrimeGrid from './PrimeGrid';

const primes = [
    { value: 3, isPrime: true },
    { value: 4, isPrime: false },
    { value: 5, isPrime: true },
    { value: 6, isPrime: false },
    { value: 7, isPrime: true },
    { value: 8, isPrime: false },
];

test('should render', () => {
    render(<PrimeGrid primes={primes} listSize={3} />);

    expect(screen.getByText('3')).toBeInTheDocument();
    expect(screen.getByText('4')).toBeInTheDocument();
    expect(screen.getByText('5')).toBeInTheDocument();

    expect(screen.queryByText('6')).not.toBeInTheDocument();
    expect(screen.queryByText('7')).not.toBeInTheDocument();
    expect(screen.queryByText('8')).not.toBeInTheDocument();

    // click page 2 button
    screen.getByText('2').click();

    expect(screen.queryByText('3')).not.toBeInTheDocument();
    expect(screen.queryByText('4')).not.toBeInTheDocument();
    expect(screen.queryByText('5')).not.toBeInTheDocument();

    expect(screen.getByText('6')).toBeInTheDocument();
    expect(screen.getByText('7')).toBeInTheDocument();
    expect(screen.getByText('8')).toBeInTheDocument();
});
