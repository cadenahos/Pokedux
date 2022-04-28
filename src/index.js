import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import {createStore, compose, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import pokemonReducer from './reducer/PokemonReducer';
import './index.css';
import { logActions } from './middleware';
const composerEnhancers = compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(logActions)
 );
const store = createStore(
    pokemonReducer, 
    composerEnhancers
);
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
