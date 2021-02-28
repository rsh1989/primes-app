import React, { useState } from 'react';

import PrimeGrid from '../PrimeGrid';
import Loader from '../Loader';

import { DisplayNumber, Error } from '../../types';
import { getPrimes } from '../../helpers/primes';
import { validate } from '../../helpers/validators';
import { MIN_INPUT, MAX_INPUT, NUMBER_INPUT_DEFAULT, LIST_SIZE, TEXT } from '../../constants';

import './App.scss';

const App: React.FC = () => {
    const [startRange, setStartRange] = useState<number>(NUMBER_INPUT_DEFAULT);
    const [endRange, setEndRange] = useState<number>(NUMBER_INPUT_DEFAULT);
    const [primes, setPrimes] = useState<DisplayNumber[]>([]);
    const [error, setError] = useState<Error>(null);
    const [isCalc, setIsCalc] = useState<boolean>(false);

    return (
        <div className="app">
            <h1 className="app__item">{TEXT.header}</h1>
            <div className="app__item">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        setPrimes([]);
                        setIsCalc(true);

                        // make primes calculation non-blocking
                        setTimeout(() => {
                            getPrimes(startRange, endRange)
                                .then((primes: DisplayNumber[]) => setPrimes(primes))
                                .finally(() => setIsCalc(false));
                        });
                    }}
                >
                    <label>
                        {TEXT.startLabel}
                        <input
                            className="app__input"
                            type="number"
                            name="from"
                            min={MIN_INPUT}
                            max={MAX_INPUT}
                            required
                            onChange={(e) => {
                                const start = parseInt(e.target.value);
                                const error = validate(start, endRange);

                                setError(error);
                                setStartRange(start);
                            }}
                        />
                    </label>
                    <label className="app__end_input_label">
                        {TEXT.endLabel}
                        <input
                            className="app__input"
                            type="number"
                            name="to"
                            min={MIN_INPUT}
                            max={MAX_INPUT}
                            required
                            onChange={(e) => {
                                const end = parseInt(e.target.value);
                                const error = validate(startRange, end);

                                setError(error);
                                setEndRange(end);
                            }}
                        />
                        {error && <div className="app__error">{error}</div>}
                    </label>
                    <button className="app__button" type="submit" disabled={error !== null || isCalc}>
                        {TEXT.buttonText}
                    </button>
                </form>
            </div>
            <div className="app__item">{isCalc ? <Loader /> : <PrimeGrid primes={primes} listSize={LIST_SIZE} />}</div>
        </div>
    );
};

export default App;
