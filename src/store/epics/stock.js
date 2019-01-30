import { ajax } from 'rxjs/ajax';
import { map, mergeMap, catchError } from 'rxjs/operators';
import {
    FETCH_SYMBOLS_ONGOING,
    FETCH_SYMBOLS_SUCCESS,
    FETCH_SYMBOLS_FAILURE
} from '../action-types';
import { ofType } from 'redux-observable';
import { createUrl } from '../../utils/url';

export const fetchSymbols = symbol => ({ type: FETCH_SYMBOLS_ONGOING, payload: { symbol } });
export const fetchSymbolsSuccess = payload => ({ type: FETCH_SYMBOLS_SUCCESS, payload });
export const fetchSymbolsFailure = payload => ({ type: FETCH_SYMBOLS_FAILURE, payload });

export const searchSymbolEpic = action$ => action$.pipe(
    ofType(FETCH_SYMBOLS_ONGOING),
    mergeMap(action =>
        ajax
            .getJSON(createUrl(`function=SYMBOL_SEARCH&keywords=${action.payload.symbol}`))
            .pipe(
                map(response => fetchSymbolsSuccess(response)),
                catchError(error => fetchSymbolsFailure(error))
            )
    )
);
