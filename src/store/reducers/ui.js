import * as actionTypes from '../actions/actionTypes';

const initialState = {
    currencies: [{
        value: 'BTC_BCH',
        text: 'Bitcoin Cash'
    }, {
        value: 'BTC_LSK',
        text: 'Lisk'
    }, {
        value: 'BTC_ETH',
        text: 'Etherium'
    }, {
        value: 'BTC_XMR',
        text: 'Monero'
    }, {
        value: 'BTC_STRAT',
        text: 'Stratis'
    }],
    timeInterval: [{
        value: '86400',
        text: 'Last 24 hours'
    }, {
        value: '172800',
        text: 'Last 48 hours'
    }, {
        value: '259200',
        text: 'Last 72 hours'
    }],
    selectedCurrency: 'BTC_BCH',
    selectedTimeInterval: '86400',
    selectedMaxCotation: '',
};

const selectCurrency = (state, action) => ({
    ...state,
    selectedCurrency: action.currency,
    selectedMaxCotation: '',
});

const selectTimeInterval = (state, action) => ({
    ...state,
    selectedTimeInterval: action.timeInterval,
    selectedMaxCotation: '',
});

const selectMaxCotation = (state, action) => ({
    ...state,
    selectedMaxCotation: action.maxCotation,
});

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.SELECT_CURRENCY: return selectCurrency(state, action);
        case actionTypes.SELECT_TIME_INTERVAL: return selectTimeInterval(state, action);
        case actionTypes.SELECT_MAX_COTATION: return selectMaxCotation(state, action);
        default: return state;
    }
}

export default reducer;
