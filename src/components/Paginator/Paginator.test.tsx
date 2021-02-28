import React from 'react';
import { render, screen } from '@testing-library/react';

import Paginator from './Paginator';

const primes = [
    { value: 3, isPrime: true },
    { value: 4, isPrime: false },
    { value: 5, isPrime: true },
    { value: 6, isPrime: false },
    { value: 7, isPrime: true },
    { value: 8, isPrime: false },
];

test('should render', () => {
    render(<Paginator primes={primes} listSize={3} onClick={() => null} />);

    expect(screen.getByText(1)).toBeInTheDocument();
    expect(screen.getByText(2)).toBeInTheDocument();
});
