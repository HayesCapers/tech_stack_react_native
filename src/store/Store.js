import { createStore, combineReducers } from 'redux';
import rootReducer from '../reducers/index'

export default function configureStore() {
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers/index');
      store.replaceReducer(nextRootReducer);
    });
  }

  const reducer = rootReducer;
  const store = createStore(reducer);
  return store;
}


