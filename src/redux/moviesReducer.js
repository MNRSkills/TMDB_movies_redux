import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  popular: [],
  error: "",
  searchMovie: null,
};

export const fetchPopMovies = createAsyncThunk("popMovies", async () => {
  return await axios
    .get("http://localhost:4000/popular")
    .then((response) => {
      return response.data.results;
    })
    .catch((error) => `${error}`);
});

export const SearchMovieTitle = createAsyncThunk(
  "searchMovies",
  async (searchBar) => {
    return await axios
      .get(`http://localhost:4000/search/:${searchBar}`)
      .then((response) => {
        return response.data.results;
      })
      .catch((error) => `${error}`);
  }
);

export const movieSlice = createSlice({
  name: "movies",
  initialState,

  extraReducers: (builder) => {
    builder.addCase(fetchPopMovies.fulfilled, (state, action) => {
      state.popular = action.payload;
      state.error = action.error;
    });
    builder.addCase(SearchMovieTitle.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(SearchMovieTitle.fulfilled, (state, action) => {
      state.searchMovie = action.payload;
      state.isLoading = false;
    });
  },
});
// Action creators are generated for each case reducer function
// export const { popReducer } = movieSlice.action;

export default movieSlice.reducer;
