import { applyMiddleware, compose, createStore } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { ShopifyTransform } from './localStorage'
import rootReducer from './reducers'


const persistConfig = { // configuration object for redux-persist
  key: 'shopify',
  storage, // define which storage to use
  transforms: [ShopifyTransform],
}

const persistedReducer = persistReducer(persistConfig, rootReducer()) // create a persisted reducer

export default function createReduxStore() {
  // ======================================================
  // Store Enhancers
  // ======================================================
  const enhancers = []
  if (typeof window !== `undefined`) {
    if (window && window.location) {
      const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__
      if (typeof devToolsExtension === 'function') {
        enhancers.push(devToolsExtension())
      }
    }
  }

  // ======================================================
  // Middleware Configuration
  // ======================================================

  const middleware = []

  // ======================================================
  // Store Instantiation and HMR Setup
  // ======================================================

  const store = createStore(
    persistedReducer,
    compose(applyMiddleware(...middleware), ...enhancers)
  )

  return store
}