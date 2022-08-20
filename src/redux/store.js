import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice.js'
import postReducer from './postSlice.js'

// Saga
import catReducer from './saga/catSlice.js'
import createSagaMiddleware from 'redux-saga'
import catSaga from './saga/catSaga.js'

const saga = createSagaMiddleware()

export default configureStore({
   reducer: {
      user: userReducer,
      post: postReducer,
      cats: catReducer
   },

   middleware: [saga]
})
saga.run(catSaga)