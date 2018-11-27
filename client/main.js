import React from 'react'
import { hydrate } from 'react-dom'
import App from './App'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from './src/reducers';
import {isAuthenticated} from './src/auth/auth';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

hydrate(
   <Provider store={createStoreWithMiddleware(reducers, {auth: {authenticated: {auth: isAuthenticated()}}})}>
    <App/>
   </Provider>
  , document.getElementById('root')
)
