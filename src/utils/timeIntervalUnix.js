export const createTimeIntervalUnixStandard = (timeDifference) => {
    const now = new Date().getTime() / 1000;
    const differenceInt = parseInt(timeDifference, 10);

    return {
        stateTime: now - differenceInt,
        endTime: now,
    }
}

export const convertToDateTime = (date) => new Date(date * 1000).toString();
