import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import reducers from '../reducers/index';
import { getCountries } from '../actions/actions-countries';

const logger = createLogger();
const store = createStore(reducers, applyMiddleware(logger));

store.dispatch(getCountries());

export default store;