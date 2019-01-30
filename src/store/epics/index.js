import { combineEpics } from 'redux-observable';
import { searchSymbolEpic } from './stock';

export default combineEpics(
    searchSymbolEpic
);
