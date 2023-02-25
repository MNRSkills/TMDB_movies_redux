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

export const fetchNowPlaying = createAsyncThunk("nowPlaying", async () => {
  return await axios
    .get("http://localhost:4000/now-playing")
    .then((response) => {
      return response.data;
    })
    .catch((error) => `${error}`);
});

export const fetchShowsPop = createAsyncThunk("tvShowPop", async () => {
  return await axios
    .get("http://localhost:4000/tv-shows")
    .then((response) => {
      return response.data;
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

export const LoginForm = createAsyncThunk("loginForm", async () => {
  return await axios
    .post(`http://localhost:4000/db/login`)
    .then((response) => console.log("THIS WORKS LOGIN", response.data))
    .catch((error) => console.log("ERROOR", error));
});

const initialState = {
  isLoading: false,
  popular: [],
  error: "",
  searchMovie: "",
  topRated: [],
  nowPlaying: [],
  tvShows: [],
  loginStatus: {
    Status: false,
    token: "",
    refreshToken: "",
  },
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
    builder.addCase(fetchNowPlaying.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchNowPlaying.fulfilled, (state, action) => {
      state.isLoading = false;
      state.nowPlaying.push(action.payload);
    });
    builder.addCase(fetchShowsPop.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchShowsPop.fulfilled, (state, action) => {
      state.isLoading = false;
      state.tvShows.push(action.payload);
    });
    builder.addCase(LoginForm.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(LoginForm.fulfilled, (state, action) => {
      state.isLoading = false;
      state.loginStatus = action.payload;
    });
  },
});
// Action creators are generated for each case reducer function
export const { clearSearch } = movieSlice.actions;

export default movieSlice.reducer;
