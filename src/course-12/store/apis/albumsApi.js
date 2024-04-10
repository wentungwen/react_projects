import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { faker } from "@faker-js/faker";
import { pause } from "../thunks/fetchUsers";

const albumsApi = createApi({
  reducerPath: "albums",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3005/",
    // pause for dev only
    // fetchFn: async (...args) => {
    //   await pause(2000);
    //   return fetch(...args);
    // },
  }),
  endpoints(builder) {
    return {
      addAlbum: builder.mutation({
        invalidatesTags: (result, error, user) => {
          return [{ type: "UsersAlbums", id: user.id }];
        },
        query: (user) => {
          return {
            url: "/albums",
            method: "POST",
            body: {
              userId: user.id,
              title: faker.commerce.productName(),
            },
          };
        }, 
      }),
      removeAlbums: builder.mutation({
        invalidatesTags: (result, error, album) => {
          return [{ type: "Album", id: album.id }];
        },
        query: (album) => {
          return {
            url: `/albums/${album.id}`,
            method: "DELETE",
          };
        },
      }),
      fetchAlbums: builder.query({
        // the user (arg) is what we passed into useFetchAlbumsQuery({id: 1, name: "Myra"})...
        providesTags: (result, error, user) => {
          const tags = result.map((album) => {
            return { type: "Album", id: album.id };
          });
          tags.push({ type: "UsersAlbums", id: user.id });
          return tags;  
        },
        // ...here
        query: (user) => {
          return {
            url: "/albums",
            params: {
              userId: user.id,
            },
            method: "Get",
          };
        },
      }),
    };
  },
});

export { albumsApi };
export const {
  useFetchAlbumsQuery,
  useAddAlbumMutation,
  useRemoveAlbumsMutation,
} = albumsApi;
