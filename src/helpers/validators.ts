import { Error, ErrorMessage } from '../types';
import { MAX_RANGE } from '../constants';

export const validate = (start: number, end: number): Error => {
    if (!start || !end) {
        return null;
    }

    if (start > end) {
        return ErrorMessage.StartExceeded;
    }

    if (end - start >= MAX_RANGE) {
        return ErrorMessage.RangeExceeded;
    }

    return null;
};
