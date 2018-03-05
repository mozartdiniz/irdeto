export const getCotationThresholds = (cotations) => {
    if (!cotations || !cotations.length) {
        return {
            max: 0,
            min: 0,
        }
    }

    const sortedCotations = cotations.sort((a, b) => {
        if (a.high > b.high) {
            return -1;
        }

        if (a.high < b.high) {
            return 1;
        }

        return 0;
    });

    const max = sortedCotations[0].high;
    const min = sortedCotations[sortedCotations.length-1].high;

    return {
        max,
        min,
    }
}

export const sortByDate = (cotations) => {
    if (!cotations || !cotations.length) {
        return [];
    }

    return cotations.sort((a, b) => {
        if (a.date > b.date) {
            return -1;
        }

        if (a.date < b.date) {
            return 1;
        }

        return 0;
    });
}

export const filterByMax = (cotations, max) => {
    if (!cotations || !cotations.length) {
        return [];
    }

    return cotations.filter((cotatation) => {
        return cotatation.high > max;
    });
}

