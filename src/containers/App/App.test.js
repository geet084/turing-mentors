import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from '../../reducers/index';
import thunk from 'redux-thunk';

describe('App', () => {
  describe('defaults', () => {
    it('renders without crashing', () => {
      const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
      const div = document.createElement('div');
      ReactDOM.render(
        <Provider store={store}>
          <App />
        </Provider>, div);
      ReactDOM.unmountComponentAtNode(div);
    });
  });
});