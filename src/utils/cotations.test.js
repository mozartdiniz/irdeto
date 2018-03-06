import {
    getCotationThresholds,
    sortByDate,
    filterByMax
} from './cotations';

const cotations = [{
    date: 400,
    high: 1,
    low: 1,
    open: 0.030801,
    close: 0.03097499,
    volume: 5.65285131,
    quoteVolume: 182.47497142,
    weightedAverage: 0.03097877
}, {
    date: 100,
    high: 4,
    low: 2,
    open: 0.030801,
    close: 0.03097499,
    volume: 5.65285131,
    quoteVolume: 182.47497142,
    weightedAverage: 0.03097877
}, {
    date: 300,
    high: 5,
    low:3,
    open: 0.030801,
    close: 0.03097499,
    volume: 5.65285131,
    quoteVolume: 182.47497142,
    weightedAverage: 0.03097877
}];

describe('Cotations', () => {
    it('should extract the maximum and the minimum value', () => {

        const thresholds = getCotationThresholds(cotations);

        expect(thresholds.min).toBe(1);
        expect(thresholds.max).toBe(5);
    });

    it('should sort the cotations per date', () => {

        const sortedCotations = sortByDate(cotations);

        expect(sortedCotations[0].date).toBe(400);
        expect(sortedCotations[1].date).toBe(300);
        expect(sortedCotations[2].date).toBe(100);
    });

    it('should return the cotations with max value bigger than the given paramenter', () => {

        const filteredCotations = filterByMax(cotations, 2);

        expect(filteredCotations.length).toBe(2);
        expect(filteredCotations[0].high).toBe(4);
        expect(filteredCotations[1].high).toBe(5);

        const filteredCotationsTwo = filterByMax(cotations, 4);

        expect(filteredCotationsTwo.length).toBe(1);
        expect(filteredCotationsTwo[0].high).toBe(5);
    });
});
