import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from './moviesReducer';

export default configureStore({
  reducer: {
    popularMovies: moviesReducer,
  }
})