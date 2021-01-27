import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore,compose,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './redux/reducers/rootReducer';

const store = createStore(rootReducer,compose(
  applyMiddleware(thunk)
))

ReactDOM.render(
  <React.StrictMode> 
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


