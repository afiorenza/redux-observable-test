import {
    FETCH_SYMBOLS_ONGOING,
    FETCH_SYMBOLS_SUCCESS,
    FETCH_SYMBOLS_FAILURE
} from '../action-types';

const initialState = {
    fetchSymbolOngoing: false,
    hasFetchedSymbol: false,
    stock: [],
    bestMatches: [],
    error: null
}

const stock = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SYMBOLS_ONGOING:
            return {
                ...state,
                fetchSymbolOngoing: true
            };

        case FETCH_SYMBOLS_SUCCESS:
            return {
                ...state,
                bestMatches: action.payload.bestMatches,
                fetchSymbolOngoing: false,
                hasFetchedSymbol: true,
                error: null
            };

        case FETCH_SYMBOLS_FAILURE:
            return {
                ...state,
                bestMatches: [],
                fetchSymbolOngoing: false,
                hasFetchedSymbol: true,
                error: action.payload.error
            }

        default:
            return state;
    }
}

export default stock;
