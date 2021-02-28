import React, { useState } from 'react';
import classnames from 'classnames';

import Paginator from '../Paginator';

import { DisplayNumber } from '../../types';

import './PrimeGrid.scss';

type Props = {
    primes: DisplayNumber[];
    listSize: number;
};

const PrimeGrid: React.FC<Props> = ({ primes, listSize }: Props) => {
    const [displayedPrimes, setDisplayedPrimes] = useState<DisplayNumber[]>(primes.slice(0, listSize));

    if (!primes.length) {
        return null;
    }

    return (
        <div className="prime_grid">
            {primes.length && primes.length > listSize ? (
                <Paginator
                    listSize={listSize}
                    primes={primes}
                    onClick={(p: DisplayNumber[]) => setDisplayedPrimes(p)}
                />
            ) : null}
            <div className="prime_grid__table">
                {displayedPrimes.map((num: DisplayNumber) => (
                    <div className="prime_grid__cell" key={num.value}>
                        <div className={classnames({ 'prime_grid__cell--prime': num.isPrime })}>{num.value}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PrimeGrid;
