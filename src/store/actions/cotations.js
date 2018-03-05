import * as actionTypes from './actionTypes';

import URLs from '../../conf/URLs';
import { createTimeIntervalUnixStandard } from '../../utils/timeIntervalUnix';

export const saveCotation = (cotations) => ({
    type: actionTypes.LOAD_COTATION,
    cotations,
});

export const loadCotation = (currency, period) => {
    const timeInterval = createTimeIntervalUnixStandard(period);

    return (dispatch) => {
        fetch(`${URLs.poloniexAPI}?command=returnChartData&currencyPair=${currency}&start=${timeInterval.stateTime}&end=${timeInterval.endTime}&period=300`)
        .then((response) => {
          return response.json();
        })
        .then((cotations) => {
            dispatch(saveCotation(cotations));
        });
    }
};
