import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import thunk from 'redux-thunk';
import rootReducer from './reducers';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// const initialState = {};

const middleware = [thunk];

// const store = createStore(
//   rootReducer,
//   initialState,
//   composeWithDevTools(applyMiddleware(...middleware))
// );

// export default () => {
//   let store = createStore(
//     persistedReducer,
//     // initialState,
//     composeWithDevTools(applyMiddleware(...middleware))
//   );
//   let persistor = persistStore(store);
//   return { store, persistor };
// };

export let store = createStore(
  persistedReducer,
  // initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export let persistor = persistStore(store);

// export default store;
