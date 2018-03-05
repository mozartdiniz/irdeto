import * as actionTypes from './actionTypes';

export const selectCurrency = (currency) => ({
    type: actionTypes.SELECT_CURRENCY,
    currency,
});

export const selectTimeInterval = (timeInterval) => ({
    type: actionTypes.SELECT_TIME_INTERVAL,
    timeInterval,
});

export const selectMaxCotation = (maxCotation) => ({
    type: actionTypes.SELECT_MAX_COTATION,
    maxCotation,
});
