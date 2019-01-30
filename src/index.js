import { Provider } from 'react-redux';
import { StockList } from './components';
import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';

ReactDOM.render(
    <Provider store={store}>
        <StockList />
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();
