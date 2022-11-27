import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from './moviesReducer';
import searchReducer from './searchReducer';

export default configureStore({
  reducer: {
    popularMovies: moviesReducer,
    // searchMovies: searchReducer
  }
})