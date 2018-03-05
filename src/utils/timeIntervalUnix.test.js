import {
    convertToDateTime
} from './timeIntervalUnix';

describe('TimeIntervalUnix', () => {
    it('should convert from unix time to timestamp', () => {

        const timestampOne = convertToDateTime(1520103900);
        const timestampTwo = convertToDateTime(1520104500);

        expect(timestampOne).toBe('Sat Mar 03 2018 20:05:00 GMT+0100 (CET)');
        expect(timestampTwo).toBe('Sat Mar 03 2018 20:15:00 GMT+0100 (CET)');
    });
});
