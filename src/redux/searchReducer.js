import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";
import axios from "axios";

const initialState = {
  searchResult: [],
  error: "",
};


export const searchApi = createApi({
  reducerPath: "searchMovie",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4000/" }),
  endpoints: (builder) => ({
    getSearchMovie: builder.query({
      query: (movie) => `/search?q=${movie}`,
    }),
  }),
});
// export const { useGetSearchMovie } = searchApi;
// export default searchSlice.reducer;
