import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import { StockList } from './components';

ReactDOM.render(
    <Provider store={store}>
        <StockList />
    </Provider>,
    document.getElementById('root')
);
