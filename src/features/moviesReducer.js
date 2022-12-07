import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPopMovies = createAsyncThunk("popMovies", async () => {
  return await axios
    .get("http://localhost:4000/popular")
    .then((response) => {
      return response.data.results;
    })
    .catch((error) => `${error}`);
});

export const fetchTopRated = createAsyncThunk("topRated", async () => {
  return await axios
    .get("http://localhost:4000/top_rated")
    .then((response) => {
      return response.data.results;
    })
    .catch((error) => `${error}`);
});

export const SearchMovieTitle = createAsyncThunk(
  "searchMovies",
  async (searchBar) => {
    console.log("THIS IS  THE REACTR QUERY", searchBar);
    return await axios
      .get(`http://localhost:4000/search/:${searchBar}`)
      .then((response) => {
        // console.log("THIS SI SWORKKING", response.data.results);
        return response.data.results;
      })
      .catch((error) => `${error}`);
  }
);

const initialState = {
  isLoading: false,
  popular: [],
  error: "",
  searchMovie: "",
  topRated: [],
};

export const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    clearSearch(state) {
      state.searchMovie = "";
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchPopMovies.fulfilled, (state, action) => {
      state.popular = action.payload;
      state.error = action.error;
    });
    builder.addCase(SearchMovieTitle.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(SearchMovieTitle.fulfilled, (state, action) => {
      state.isLoading = false;
      state.searchMovie = action.payload;
    });
    builder.addCase(fetchTopRated.fulfilled, (state, action) => {
      state.topRated = action.payload;
    });
  },
});
// Action creators are generated for each case reducer function
export const { clearSearch } = movieSlice.actions;

export default movieSlice.reducer;
