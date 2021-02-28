import { DisplayNumber } from '../types';

const toDisplayNumber = (isPrime: boolean, index: number): DisplayNumber => ({ value: index, isPrime });

const calcPrimes = (end: number): boolean[] => {
    //check base case
    if (end < 5) {
        return [false, false, true, true, false];
    }

    const primes = Array(end + 1).fill(false);
    primes[2] = true;
    primes[3] = true;

    // small optimisation to skip multiples of [2,3] and mark possible primes
    for (let i = 5, c = 2; i <= end; i += c, c = 6 - c) {
        primes[i] = true;
    }

    // use possible primes to find any remaining composites
    for (let i = 5, c = 2; i * i <= end; i += c, c = 6 - c) {
        if (primes[i]) {
            for (let j = i * i; j <= end; j += i) {
                primes[j] = false;
            }
        }
    }

    return primes;
};

export const getPrimesAsDisplayNumbers = (start: number, end: number): DisplayNumber[] =>
    calcPrimes(end)
        .map(toDisplayNumber)
        .slice(start, end + 1);

export const getPrimes = async (start: number, end: number): Promise<DisplayNumber[]> => {
    const primes = await getPrimesAsDisplayNumbers(start, end);

    return primes;
};
