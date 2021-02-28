export type DisplayNumber = {
    value: number;
    isPrime: boolean;
};

export enum ErrorMessage {
    RangeExceeded = 'Range exeeds 1,000',
    StartExceeded = 'Start exeeds end',
}

export type Error = ErrorMessage | null;
