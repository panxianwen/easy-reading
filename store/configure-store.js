/**
 * Created by panxianwen on 16/11/7.
 */
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const createLogger = require('redux-logger');

if(process.env.NODE_ENV === 'development') {
    const logger = createLogger();
    middlewares.push(logger);
}

const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

export default function configeStore(initialState) {
    const store = createStoreWithMiddleware({}, initialState);
    return store;
}
