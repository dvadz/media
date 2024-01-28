import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const photosApi = createApi({
  reducerPath: "photos",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3003",
  }),
  endpoints(builder) {
    return {
      fetchPhotos: builder.query({
        query: (album) => {
          return {
            url: "/photos",
            params: { albumId: album.id },
            method: "GET",
          };
        },
      }),
    };
  },
});

export const { useFetchPhotosQuery } = photosApi;
export { photosApi };
