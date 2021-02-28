import React, { useState } from 'react';
import classnames from 'classnames';

import { DisplayNumber } from '../../types';

import './Paginator.scss';

interface Props {
    primes: DisplayNumber[];
    listSize: number;
    onClick: (n: DisplayNumber[]) => void;
}

const Paginator: React.FC<Props> = ({ primes, listSize, onClick }: Props) => {
    const [offset, setOffset] = useState<number>(0);
    const length = Math.ceil(primes.length / listSize);

    const onButtonClick = (i: number) => {
        if (primes.length) {
            const start = i * listSize;
            onClick(primes.slice(start, start + listSize));
        }
    };

    const buttons = [...Array(length)].map((_a, index: number) => {
        const id = index + 1;

        return (
            <button
                className={classnames('paginator__button', { 'paginator--selected': offset === index })}
                key={id}
                onClick={() => {
                    setOffset(index);
                    onButtonClick(index);
                }}
            >
                {id}
            </button>
        );
    });

    return (
        <div className="paginator">
            <button
                className="paginator__decrement_button"
                onClick={() => {
                    const index = (offset - 1 + length) % length;
                    setOffset(index);
                    onButtonClick(index);
                }}
            >
                -
            </button>
            {buttons}
            <button
                className="paginator__increment_button"
                onClick={() => {
                    const index = (offset + 1) % length;
                    setOffset(index);
                    onButtonClick(index);
                }}
            >
                +
            </button>
        </div>
    );
};

export default Paginator;
