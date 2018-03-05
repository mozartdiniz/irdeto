import * as actionTypes from '../actions/actionTypes';

const initialState = {
    list: [],
    loading: false
};

const saveCotation = (state, action) => ({
    ...state,
    list: action.cotations,
});

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.LOAD_COTATION: return saveCotation(state, action);
        default: return state;
    }
}

export default reducer;
