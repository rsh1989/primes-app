import { getPrimesAsDisplayNumbers } from './primes';

test('should calculate primes and give display numbers', () => {
    expect(getPrimesAsDisplayNumbers(0, 10)).toEqual([
        { value: 0, isPrime: false },
        { value: 1, isPrime: false },
        { value: 2, isPrime: true },
        { value: 3, isPrime: true },
        { value: 4, isPrime: false },
        { value: 5, isPrime: true },
        { value: 6, isPrime: false },
        { value: 7, isPrime: true },
        { value: 8, isPrime: false },
        { value: 9, isPrime: false },
        { value: 10, isPrime: false },
    ]);
});

test('should remove numbers from start of the range', () => {
    expect(getPrimesAsDisplayNumbers(2, 10)).toEqual([
        { value: 2, isPrime: true },
        { value: 3, isPrime: true },
        { value: 4, isPrime: false },
        { value: 5, isPrime: true },
        { value: 6, isPrime: false },
        { value: 7, isPrime: true },
        { value: 8, isPrime: false },
        { value: 9, isPrime: false },
        { value: 10, isPrime: false },
    ]);
});
