export const getCotationThresholds = (cotations) => {
    if (!cotations || !cotations.length) {
        return {
            max: 0,
            min: 0,
        }
    }

    const max = cotations[0].high;
    const min = cotations[cotations.length-1].high;

    return {
        max,
        min,
    }
}
