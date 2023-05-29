import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { billReducer, dishReducer, ordersReducer } from './reducers'

import { api } from './api'

const rootReducer = combineReducers({
  dish: dishReducer,
  orders: ordersReducer,
  bills: billReducer,
  [api.reducerPath]: api.reducer,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
})

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch
