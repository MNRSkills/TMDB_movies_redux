import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import axios from "axios";

const initialState = {
  searchResult: [],
  error: "",
};

// export const searchApi = createApi({
//   reducerPath: "Search",
//   baseQuery: fetchBaseQuery({baseUrl: "http://localhost:4000"})
//   reducer: {
//     searchMovie(state, action) {
//       state.searchResult = action.payload;
//     },
//   },
// });
// export const { useGetSearchMovie } = searchApi;
// export default searchSlice.reducer;
